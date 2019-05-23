import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Common from '../Common/Common';

const Input = ({
	inverse, // Opposite colorway
	label,
	name,
	id,
	type,
	checked,
	classes
}) => {
	const combinedClasses = classNames(
		'ui-input',
		classes,
		{inverse}
	);

	return (
		<Fragment>
			<Common
				type={type}
				checked={checked}
				name={name}
				label={label}
				id={id}
				tag="input"
				classes={combinedClasses}
			/>
			<label
				className="ui-input-label"
				htmlFor={id}
			>
				{label}
			</label>
		</Fragment>
	);
};


Input.propTypes = {
	inverse: PropTypes.boolean,
	type: PropTypes.string,
	checked: PropTypes.boolean,
	label: PropTypes.string,
	name: PropTypes.string,
	handleChange: PropTypes.function,
	id: PropTypes.string,
	classes: PropTypes.object
};


export default Input;
