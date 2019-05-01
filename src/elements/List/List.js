/**
 * List
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const List = ({
	children,
	bare,
	inline,
	...other
}) => {
	const style = inline ? 'inline' : bare ? 'bare' : '';

	const combinedClasses = classNames(
		'ui-list',
		style
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="ul"
		>
			{children}
		</Common>
	);
};

List.propTypes = {
	children: PropTypes.node.isRequired,
	/** Creates list without padding and without list-style */
	bare: PropTypes.bool,
	/** Creates inline list without list-style */
	inline: PropTypes.bool
};

export default List;
