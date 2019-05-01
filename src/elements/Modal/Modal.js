import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import modalContext from '../../util/modalContext';
import { isMobile } from '../../util/helpers';

const { Consumer } = modalContext;

// The Modal conditionally mounts/renders the modal itself and uses context and lifecycle methods to enqueue and dequeue itself
class Modal extends Component {
	static propTypes = {
		show: PropTypes.bool,
		currentModal: PropTypes.object,
		children: PropTypes.node.isRequired,
		onDismiss: PropTypes.func,
		enqueueModal: PropTypes.func.isRequired,
		dequeueModal: PropTypes.func.isRequired,
		modalRoot: PropTypes.instanceOf(window.Element).isRequired,
		className: PropTypes.string,
		dismissible: PropTypes.bool,
		fullScreen: PropTypes.bool
	};

	constructor(props) {
		super(props);

		this.modal = React.createRef();

		this.state = {
			modalVisible: false
		};
	}

	componentDidUpdate(prevProps) {
		// If the modal toggled to show, queue it
		if(!prevProps.show && this.props.show) {
			this.props.enqueueModal(this);
		}

		// If the modal has become the current modal, update state to display
		if(prevProps.currentModal !== this && this.props.currentModal === this) {
			this.setState({modalVisible: true}, () => window.requestAnimationFrame(() => this.modal.current.classList.add('enter-done')));
		}

		// If the modal toggled to not show, remove it from the queue
		if(prevProps.show && !this.props.show) {
			this.props.dequeueModal(this);

			this.modal.current.classList.add('exit');

			setTimeout(() => this.setState({modalVisible: false}), 300);
		}
	}

	render() {
		const {
			children,
			onDismiss,
			dismissible,
			modalRoot,
			className,
			fullScreen
		} = this.props;

		if(!this.state.modalVisible) return null;

		const combinedClasses = classNames(
			'ui-modal',
			className,
			{
				'full-screen': fullScreen && isMobile()
			}
		);

		return createPortal(
			<div
				className={combinedClasses}
				ref={this.modal}
			>
				{children}
				{dismissible && <div className="ui-modal-close" onClick={onDismiss} title="Dismiss">&#x00D7;</div>}
			</div>,
			modalRoot
		);
	}
}

// The consumer will provide context as props to the ModalController lifecycle methods
const ModalConsumer = props => (
	<Consumer>
		{context => <Modal {...props} {...context} />}
	</Consumer>
);

export default ModalConsumer;
