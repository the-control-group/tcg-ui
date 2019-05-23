import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({
	inverse, // Opposite colorway
	label,
	name,
	handleChange,
	defaultValue,
	id,
	type
}) => {
	if(type === 'checkbox'){
		return (
			<div>
				<label className="ui-input-container">
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
	} else if (type === 'radio') {
		return (
			<div>
				<label className="ui-input-container">
					{label}
					<input
						type="radio"
						onChange={handleChange}
						name={name}
						defaultValue={defaultValue}
					/>
					<span className="checkmark"></span>
				</label>
			</div>
		);
	}
};


Input.propTypes = {
	inverse: PropTypes.boolean,
	defaultValue: PropTypes.boolean,
	label: PropTypes.string,
	name: PropTypes.string,
	handleChange: PropTypes.function
};


export default Input;
