/**
 * Notification
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';
import Icon from '../Icon/Icon';

const Notification = ({ status, message, action, onClick, ...other }) => {
	const combinedClasses = classNames('notification', status, other.classes);

	return (
		// TODO: Add action button & onClick to the right of the message when an action is passed down
		<Common classes={combinedClasses} tag="span" {...other}>
			<Icon className="notification-icon" name={status} size={20} />

			<span>{message}</span>

			{action && (
				<span className="action" onClick={onClick}>
					{action}
				</span>
			)}
		</Common>
	);
};

Notification.propTypes = {
	status: (props, propName, componentName) => {
		if (!['success', 'failure', 'caution'].includes(props.status)) {
			return new Error(
				`Invalid prop: ${componentName} must have a prop '${propName}' with a value of one of ['success', 'failure', 'caution']`
			);
		}
	},
	message: PropTypes.string.isRequired,
	action: PropTypes.string,
	onClick: (props, propName, componentName) => {
		if (!props.action) {
			// if no action is given, we don't need an onClick
			return;
		}

		if (!props.onClick) {
			return new Error(`Invalid prop: When given a prop 'action', ${componentName} must have a prop 'onClick'`);
		}

		if (typeof props.onClick !== 'function') {
			return new Error(
				`Invalid prop: When given a prop 'action', ${componentName} must have a prop 'onClick' that is a function`
			);
		}
	}
};

export default Notification;
