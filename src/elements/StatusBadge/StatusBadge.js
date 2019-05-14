/**
 * Button
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const StatusBadge = ({ children, active, paused, pending, archived, ...other }) => {
	// const style = outline ? 'outline' : bare ? 'bare' : '';

	const combinedClasses = classNames(
		'status-badge',
		other.classes,
		active &&
			'active',
		paused &&
			'paused',
		pending &&
			'pending',
		archived &&
			'archived'
		// style,
	);

	return (
		<Common
			{...other}
			classes={
				combinedClasses
			}
			tag="span"
      >
      <span className="dot" />
			{active &&
				'ACTIVE'}
			{paused &&
				'PAUSED'}
			{pending &&
				'PENDING'}
			{archived &&
				'ARCHIVED'}
		</Common>
	);
};

StatusBadge.propTypes = {
	children:
		PropTypes
			.node
			.isRequired
	// loading: PropTypes.bool, // Loading state
	// disabled: PropTypes.bool, // Disabled state
	// full: PropTypes.bool, // Full width size
	// mini: PropTypes.bool, // Mini size
	// outline: PropTypes.bool, // Outline style
	// bare: PropTypes.bool, // Bare style
	// small: PropTypes.bool, // Small button styles
	// secondary: PropTypes.bool // Secondary button styles
};

export default StatusBadge;
