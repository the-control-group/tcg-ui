import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const ToggleSwitch = ({ toggled, handleClick, disabled }) => {
	const classes = classNames(
		'ui-toggle-switch',
		// Pass in props from a parent component to show "on" or "off" (ex. from parent component: toggled={this.state.user.isActive})
		toggled && 'on',
		disabled && 'disabled'
	);

	return (
		<div
			className={classes}
			onClick={!disabled ? handleClick : null}
		>
		</div>
	);
};

ToggleSwitch.propTypes = {
	toggled: PropTypes.bool,
	handleClick: PropTypes.func,
	disabled: PropTypes.bool
};

export default ToggleSwitch;
