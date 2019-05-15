/**
 * Notification
 */

import React from 'react';
import classNames from 'classnames';

import Common from '../Common/Common';
import Icon from '../Icon/Icon';

const Notification = ({ status, message, ...other }) => {
	const combinedClasses = classNames(
		'notification',
		status,
		other.classes,
	);

	return (
    // TODO: Add action button & onClick to the right of the message when an action is passed down
		<Common
			classes={combinedClasses}
			tag="span"
			{...other}
		>
			<Icon className="notification-icon" name={status} size={20} />
			{message}
		</Common>
	);
};

Notification.propTypes = {
	status: (props, propName, componentName) => {
		if (!['success', 'failure', 'caution'].includes(props.status)){
			return new Error(`Invalid prop: ${componentName} must have a prop '${propName}' with a value of one of ['success', 'failure', 'caution']`);
		}
	}
};

export default Notification;
