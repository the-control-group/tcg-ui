/**
 * Button
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const StatusBadge = ({
	children,
	type = 'button',
	loading,
	disabled,
	mini,
	full,
	outline,
	bare,
	small,
	...other
}) => {
	const style = outline ? 'outline' : bare ? 'bare' : '';

	const combinedClasses = classNames(
		'ui-button',
		other.classes,
		style,
		small && 'small',
		mini && 'mini',
		full && 'full',
		loading && 'loading'
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="button"
			type={type}
			disabled={disabled}
		>
			{children}
		</Common>
	);
};

StatusBadge.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string, // DOM button `type` attribute
	loading: PropTypes.bool, // Loading state
	disabled: PropTypes.bool, // Disabled state
	full: PropTypes.bool, // Full width size
	mini: PropTypes.bool, // Mini size
	outline: PropTypes.bool, // Outline style
	bare: PropTypes.bool, // Bare style
	small: PropTypes.bool, // Small button styles
	secondary: PropTypes.bool // Secondary button styles
};

export default StatusBadge;
