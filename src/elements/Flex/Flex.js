import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { numberLikeProp } from '../../util/helpers';
import Common from '../Common/Common';

const Flex = ({ children, max, fixed, centerY, ...other }) => {
	const combinedClasses = classNames(
			'ui-flex-item',
			{
				'center-y': centerY
			},
			other.classes
		),
		style = {};

	if(max) style.maxWidth = Number(max);
	if(fixed) {
		style.flexGrow = 0;
		style.flexShrink = 0;
		style.flexBasis = Number(fixed);
	}

	return (
		<Common
			{...other}
			classes={combinedClasses}
			style={{
				...style,
				...other.style
			}}
			tag="div"
		>
			{children}
		</Common>
	);
};

Flex.propTypes = {
	children: PropTypes.node,
	max: numberLikeProp,
	fixed: numberLikeProp,
	centerY: PropTypes.bool
};

export default Flex;
