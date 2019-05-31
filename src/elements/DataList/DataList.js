/**
 * Data List
 */

import React, { Fragment } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

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
			<Text className="data-list-label" tag="label" variant="body-2" >{label}</Text>
			<hr />
			{rows.map((data, index) => <DataListRow key={index} data={data} />)}
		</Common>
	);
};

const DataListRow = ({ data }) => {
	return (
		<Fragment>
			<div className="data-list-item">
				<span>{data.text}</span>
				<Icon name="close-blue" height={14} width={30} onClick={data.xFn} />
			</div>
			<hr />
		</Fragment>
	);
};

DataList.propTypes = {
	rows: (props, propName, componentName) => {
		const err = new Error(`${componentName} must have a prop '${propName}' which must be a non-empty array of objects.
The objects much have a "text" property of type string and a "xFn" property of type function`);

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
	label: (props, propName, componentName) => {
		if((typeof props.label !== 'string') || props.label.length < 1) {
			return new Error(`${componentName} must have a prop '${propName}' which must be a non-empty string`);
		}
	}
};

DataListRow.propTypes = {
	data: (props, propName, componentName) => {
		const err = new Error(`${componentName} must have a prop '${propName}' which must be an object.
The object must have a 'text' property which is a non-zero length string and a 'xFn' property which is a function`);

		if(typeof props.data !== 'object') {
			return err;
		}

		if(typeof props.data.text !== 'string') {
			return err;
		}

		if(props.data.text.length < 1 ) {
			return err;
		}

		if(typeof props.data.xFn !== 'function') {
			return err;
		}
	}
};

export default DataList;
