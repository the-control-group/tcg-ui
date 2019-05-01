/**
 * Button
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
	children
}) => {
	const combinedClasses = classNames(
		'ui-button'
	);

	return (
		<button className={combinedClasses}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired
};

export default Button;
