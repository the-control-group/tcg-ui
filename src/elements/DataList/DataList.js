/**
 * Status Badge
 */

import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Common from '../Common/Common';

const DataList = ({ rows, ...other }) => {
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
			{rows.map(text => <DataListRow text={text} />)}
		</Common>
	);
};

const DataListRow = ({ text, ...other }) => {
  return (
    <Fragment>
      <span>{text}</span>
      <br />
    </Fragment>
  )
  
}

DataList.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DataList;
