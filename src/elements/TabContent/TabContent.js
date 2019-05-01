/**
 * Main content portion of `TabbedContainer` component
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Div from '../Div/Div';

const TabContent = (props) => {
	const classes = classNames('ui-tab-panel', {'active-tab': props.active});

	return (
		<Div className={classes}>
			{props.children}
		</Div>
	);
};

TabContent.defaultProps = {
	active: false
};

TabContent.propTypes = {
	children: PropTypes.node.isRequired,
	active: PropTypes.bool
};

export default TabContent;
