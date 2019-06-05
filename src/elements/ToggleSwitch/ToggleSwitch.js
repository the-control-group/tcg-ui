import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Common from '../Common/Common';

const ToggleSwitch = ({ toggled, disabled, ...other }) => {
	const classes = classNames(
		'ui-toggle-switch',
		// Pass in props from a parent component to show "on" or "off" (ex. from parent component: toggled={this.state.user.isActive})
		toggled && 'on',
		disabled && 'disabled',
		other.className
	);

	return (
		<Common
			{...other}
			tag="div"
			className={classes}
			onClick={disabled ? undefined : other.onClick}
		/>
	);
};

ToggleSwitch.propTypes = {
	toggled: PropTypes.bool,
	handleClick: PropTypes.func,
	disabled: PropTypes.bool
};

export default ToggleSwitch;
