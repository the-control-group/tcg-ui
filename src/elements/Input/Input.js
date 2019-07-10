import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

import Text from '../Text/Text';

const Label = ({ children, htmlFor }) => (
	<label htmlFor={htmlFor}>
		<Text variant="caption" inverse marginBottom="xx-small">
			{children}
		</Text>
	</label>
);

const Input = ({ label, htmlFor, type = 'text', options, nested, placeholder, full, ...other }) => {
	const combinedClasses = classNames('ui-input-wrapper', full && 'full', nested && 'nested', other.classes);

	if (type === 'select') {
		return (
			<div className={combinedClasses}>
				{label && <Label htmlFor={htmlFor}>{label}</Label>}

				<Common tag="select" defaultValue="select-placeholder" classes="ui-input" {...other}>
					{placeholder && (
						<option value="select-placeholder" disabled>
							{placeholder}
						</option>
					)}

					{Object.keys(options).map((keyName, keyIndex) => (
						<option key={keyIndex} value={keyName}>
							{options[keyName]}
						</option>
					))}
				</Common>
			</div>
		);
	}

	return (
		<div className={combinedClasses}>
			{label && <Label htmlFor={htmlFor}>{label}</Label>}

			<Common tag="input" classes="ui-input" type={type} placeholder={placeholder} {...other} />
		</div>
	);
};

Label.propTypes = {
	children: PropTypes.string,
	htmlFor: PropTypes.string
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
	remove: PropTypes.bool,
	htmlFor: PropTypes.string,
	placeholder: PropTypes.string,
	options: PropTypes.object,
	nested: PropTypes.bool,
	full: PropTypes.bool
};

export default Input;
