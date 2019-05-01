/**
 * Button
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Button = ({
	children,
	type = 'button',
	loading,
	disabled,
	mini,
	full,
	outline,
	bare,
	secondary,
	...other
}) => {
	const style = outline ? 'outline' : bare ? 'bare' : 'standard';

	const combinedClasses = classNames(
		'ui-button',
		other.classes,
		secondary ? 'secondary' : 'primary',
		style,
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

Button.propTypes = {
	children: PropTypes.node.isRequired,
	/** DOM button `type` attribute */
	type: PropTypes.string,
	/** Loading state */
	loading: PropTypes.bool,
	/** Disabled state */
	disabled: PropTypes.bool,
	/** Full width size */
	full: PropTypes.bool,
	/** Mini size */
	mini: PropTypes.bool,
	/** Outline style */
	outline: PropTypes.bool,
	/** Bare style */
	bare: PropTypes.bool,
	/** Text button styles */
	text: PropTypes.bool,
	/** Secondary button styles */
	secondary: PropTypes.bool
};

export default Button;
