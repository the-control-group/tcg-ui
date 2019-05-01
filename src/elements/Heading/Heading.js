/**
 * Text
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Heading = (props) => {
	const {
		level,
		children,
		...other
	} = props;

	const combinedClasses = classNames(
		'ui-heading',
		other.classes
	);

	return (
		<Common
			cName="Text"
			tag={`h${level}`}
			{...other}
			classes={combinedClasses}
		>
			{children}
		</Common>
	);
};

Heading.propTypes = {
	children: PropTypes.node.isRequired,
	/** Heading Level */
	level: PropTypes.string.isRequired
};

export default Heading;
