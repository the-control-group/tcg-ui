/**
 * Status Badge
 */

import React from 'react';
import classNames from 'classnames';

import Common from '../Common/Common';

const Notification = ({ status, ...other }) => {
	const combinedClasses = classNames(
		'status-badge',
		status,
		other.classes,
	);

	return (
		<Common
			classes={combinedClasses}
			tag="span"
			{...other}
		>
			<span className="status-badge-dot" />
			{status.toUpperCase()}
		</Common>
	);
};

Notification.propTypes = {
	status: (props, propName, componentName) => {
		if (!['active', 'paused', 'pending', 'archived'].includes(props.status)){
			return new Error(`Invalid prop: ${componentName} must have a prop '${propName}' with a value of one of ['active', 'paused', 'pending', 'status']`);
		}
	}
};

export default Notification;
