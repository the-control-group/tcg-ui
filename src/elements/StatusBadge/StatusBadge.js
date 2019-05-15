/**
 * Status Badge
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const StatusBadge = ({ status, ...other }) => {
	const combinedClasses = classNames(
    'status-badge',
    status,
		other.classes,
	);

	return (
		<Common
    classes={combinedClasses}
    tag="span"
    {...other}
      >
      <span className="status-badge-dot" />
			{status.toUpperCase()}
		</Common>
	);
};

StatusBadge.PropTypes = {
  status: (props, propName, componentName) => {
    if (!['active', 'paused', 'pending', 'archived'].includes(props.status)){
      return new Error(`Invalid prop: must have a prop 'status' with a value of one of ['active', 'paused', 'pending', 'status']`);
    }
  }
}

export default StatusBadge;
