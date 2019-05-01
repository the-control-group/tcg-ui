import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

export default class Notification extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		onDismiss: PropTypes.func.isRequired,
		timer: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		])
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if(this.props.timer) {
			let timeoutMs = Number(this.props.timer) * 1000;

			// If there's a bad value for timeout, default to 5 seconds
			if(Number.isNaN(timeoutMs)) timeoutMs = 5000;

			setTimeout(this.props.onDismiss, timeoutMs);
		}
	}

	render() {
		const {
			children,
			timer,
			onDismiss,
			...other
		} = this.props;

		const combinedClasses = classNames(
			'ui-notification'
		);

		return (
			<Common
				{...other}
				classes={combinedClasses}
				tag="div"
			>
				{children}
				{!timer && <div className="ui-notification-close" onClick={onDismiss} title="Dismiss">&#x00D7;</div>}
			</Common>
		);
	}
}
