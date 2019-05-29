import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Common from '../Common/Common';

const Label = ({
	classes,
	content,
	inverse, // Opposite color scheme
	remove, // Shows "-" character in the checkbox rather than a checkmark
	htmlFor
}) => {
	const labelClasses = classNames(
		'ui-input-label',
		{remove},
		{inverse},
		classes
	);

	return (
		<Common
			tag="label"
			classes={labelClasses}
			htmlFor={htmlFor}
		>
			{content}
		</Common>
	);
};

const Input = ({
	inverse, // Opposite color scheme
	label,
	name,
	id,
	type,
	checked,
	handleChange,
	remove, // Shows "-" character in the checkbox rather than a checkmark
	classes,
	...other
}) => {
	const combinedClasses = classNames(
		'ui-input',
		classes
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
				onChange={handleChange}
				{...other}
			/>
			<Label
				htmlFor={id}
				content={label}
				classes={combinedClasses}
				remove={remove}
				inverse={inverse}
			/>
		</Fragment>
	);
};


Label.propTypes = {
	content: PropTypes.string,
	htmlFor: PropTypes.string,
	classes: PropTypes.string,
	remove: PropTypes.bool,
	inverse: PropTypes.bool
};

Input.propTypes = {
	inverse: PropTypes.bool,
	type: PropTypes.string,
	checked: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string,
	handleChange: PropTypes.func,
	id: PropTypes.string,
	classes: PropTypes.object,
	remove: PropTypes.bool
};


export default Input;
