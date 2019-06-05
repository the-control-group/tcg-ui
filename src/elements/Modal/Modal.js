/**
 * Modal component
 */

import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Text from '../Text/Text';
import Icon from '../Icon/Icon';

// import classNames from 'classnames';

export default class Modal extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		title: PropTypes.string.isRequired,
		dismiss: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.modalRoot = document.createElement('div');
		this.modalRoot.id = 'ui-modal-root';
	}

	componentDidMount() {
		document.body.appendChild(this.modalRoot);
	}

	componentWillUnmount() {
		this.modalRoot.remove();
	}

	render() {
		const { children, title, dismiss } = this.props;

		return createPortal(
			<Fragment>
				<div className="ui-modal-overlay" onClick={dismiss} />

				<div className="ui-modal">
					<div className="modal-header">
						<Text variant="subtitle-2" margin="none">
							{title}
						</Text>
						<Icon
							name="close"
							className="close-button"
							onClick={dismiss}
							size={19}
						/>
					</div>

					{children}
				</div>
			</Fragment>,
			this.modalRoot
		);
	}
}
