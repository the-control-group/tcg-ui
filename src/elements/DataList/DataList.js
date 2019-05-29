/**
 * Status Badge
 */

import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

import Common from '../Common/Common';

const DataList = ({ rows, label, ...other }) => {
	const combinedClasses = classNames(
		'data-list',
		other.classes,
	);

	return (
		<Common
			classes={combinedClasses}
			tag="div"
			{...other}
    >
      <label className="label">{label}</label>
      <hr />
			{rows.map(text => <DataListRow text={text} />)}
		</Common>
	);
};

const DataListRow = ({ text, ...other }) => {
  return (
    <Fragment>
      <div className="data-list-item">
        <span>{text}</span>
        <Icon name="close-blue" />
      </div>
      <hr />
    </Fragment>
  )
  
}

DataList.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
  // onClick: (props, propName, componentName) => {
	// 	if (!props.onClick) {
	// 		return new Error(`Invalid prop: When given a prop 'action', ${componentName} must have a prop 'onClick'`);
	// 	}
    
	// 	if (typeof props.onClick !== 'function') {
	// 		return new Error(`Invalid prop: When given a prop 'action', ${componentName} must have a prop 'onClick' that is a function`);
	// 	} 
	// }
};

export default DataList;
