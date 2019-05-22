import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Checkbox = ({
	inverse, // Opposite colorway
	label,
	name,
	handleChange,
	defaultValue
}) => {
	return (
		<div>
			<label className="container">
				{label}
				<input
					type="checkbox"
					onChange={handleChange}
					name={name}
					defaultValue={defaultValue}
				/>
				<span className="checkmark"></span>
			</label>
		</div>
	);
};


Checkbox.propTypes = {
	inverse: PropTypes.boolean,
	defaultValue: PropTypes.boolean,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	handleChange: PropTypes.function.isRequired
};


export default Checkbox;
