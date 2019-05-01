import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import modalContext from '../../util/modalContext';

const { Provider } = modalContext;

class ModalOverlay extends Component {
	static propTypes = {
		show: PropTypes.bool,
		attemptDismiss: PropTypes.func.isRequired,
		modalRoot: PropTypes.instanceOf(window.Element).isRequired
	};

	constructor(props) {
		super(props);

		this.overlay = React.createRef();

		this.state = {
			overlayVisible: false
		};
	}

	componentDidUpdate(prevProps) {
		if(!prevProps.show && this.props.show) {
			this.setState({overlayVisible: true}, () => window.requestAnimationFrame(() => this.overlay.current.classList.add('enter-done')));
		}

		if(prevProps.show && !this.props.show) {
			this.overlay.current.classList.remove('enter-done');
			setTimeout(() => this.setState({overlayVisible: false}), 200);
		}
	}

	render() {
		const { attemptDismiss, modalRoot } = this.props;

		if(!this.state.overlayVisible) return null;

		return createPortal(
			<div className="ui-modal-overlay" onClick={attemptDismiss} ref={this.overlay} />,
			modalRoot
		);
	}
}

export default class ModalProvider extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	};

	#modalQueue = new Set();

	constructor(props) {
		super(props);

		this.modalRoot = document.createElement('div');
		this.modalRoot.id = 'ui-modal-root';

		this.state = {
			enqueueModal: modal => {
				this.#modalQueue.add(modal);

				// If there isn't a current modal, set the recently queued one as the current
				if(!this.state.currentModal) this.setState({
					currentModal: modal
				});
			},
			dequeueModal: modal => {
				this.#modalQueue.delete(modal);

				// If the current modal was the one removed, switch to the next modal in line or null
				if(this.state.currentModal === modal) {
					setTimeout(() => this.setState({
						currentModal: this.#modalQueue.values().next().value || null
					}), 200);
				}
			},
			currentModal: null,
			modalRoot: this.modalRoot
		};

		this.attemptDismiss = this.attemptDismiss.bind(this);
	}

	componentDidMount() {
		document.body.appendChild(this.modalRoot);
	}

	componentWillUnmount() {
		this.modalRoot.remove();
	}

	componentDidUpdate(prevProps, prevState) {
		// Lock and unlock scrolling as modals show and clear
		if(!prevState.currentModal && this.state.currentModal) {
			document.body.style.overflow = 'hidden';
		} else if(prevState.currentModal && !this.state.currentModal) {
			document.body.style.overflow = '';
		}
	}

	// If the modal is dismissible, call it's dismissal function
	attemptDismiss() {
		if(this.state.currentModal.props.dismissible) this.state.currentModal.props.onDismiss();
	}

	render() {
		const { children } = this.props,
			{ currentModal } = this.state;

		return (
			<Provider value={this.state}>
				<ModalOverlay show={!!currentModal} attemptDismiss={this.attemptDismiss} modalRoot={this.modalRoot} />
				{children}
			</Provider>
		);
	}
}
