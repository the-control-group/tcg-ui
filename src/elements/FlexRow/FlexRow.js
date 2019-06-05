import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getBreakpoint, numberLikeProp } from '../../util/helpers';
import Common from '../Common/Common';

const FlexRow = ({
	children,
	breakMedium,
	breakSmall,
	breakCustom,
	gutter,
	...other
}) => {
	const combinedClasses = classNames(
			'ui-flex-row',
			{
				[`gutter-${gutter}`]: gutter
			},
			other.classes
		),
		breakpoint = getBreakpoint(),
		style = {};

	switch (breakpoint) {
		case 'Medium':
			if (breakMedium) style.display = 'block';
			break;

		case 'Small':
			if (breakMedium || breakSmall) style.display = 'block';
			break;
	}

	if (breakCustom && window.innerWidth <= Number(breakCustom))
		style.display = 'block';

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

FlexRow.propTypes = {
	children: PropTypes.node.isRequired,
	breakMedium: PropTypes.bool,
	breakSmall: PropTypes.bool,
	breakCustom: numberLikeProp,
	gutter: PropTypes.string
};

export default FlexRow;
