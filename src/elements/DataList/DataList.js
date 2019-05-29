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
			{rows.map((data, index) => <DataListRow key={index} data={data} />)}
		</Common>
	);
};

const DataListRow = ({ data, ...other }) => {
  return (
    <Fragment>
      <div className="data-list-item">
        <span>{data.text}</span>
        <Icon name="close-blue" height={14} width={30} onClick={data.xFn} />
      </div>
      <hr />
    </Fragment>
  );
}

DataList.propTypes = {
  rows: (props, propName, componentName) => {
    const err = new Error(`Invalid prop: ${componentName} must have a prop '${propName}' which must be a non-empty array of objects. The objects much have a "text" property of type string and a "xFn" property of type function`);

    if(!Array.isArray(props.rows)) {
			return err;
    }

    if(props.rows.length < 1) {
			return err;
    }

    if (!props.rows.every(entry => typeof entry.text === 'string' && typeof entry.xFn === 'function')) {
			return err;
    }
  },
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
