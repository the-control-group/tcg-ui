/**
 * Div
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Div = ({ children, item, card, subsection, ...other }) => {
	const combinedClasses = classNames(
		'ui-div',
		other.classes,
		item && 'item',
		card && 'card',
		subsection && 'subsection'
	);

	return (
		<Common {...other} classes={combinedClasses} tag="div">
			{children}
		</Common>
	);
};

Div.propTypes = {
	children: PropTypes.node,
	/** Creates a 3D card style */
	card: PropTypes.bool,
	/** Creates a subsection with bolder seperation styles */
	subsection: PropTypes.bool,
	/** Creates an item with seperation styles */
	item: PropTypes.bool
};

export default Div;
