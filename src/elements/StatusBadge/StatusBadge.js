/**
 * Status Badge
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const StatusBadge = ({ children, active, paused, pending, archived, ...other }) => {

	const combinedClasses = classNames(
		'status-badge',
		active && 'active',
		paused && 'paused',
		pending && 'pending',
		archived && 'archived',
		other.classes,
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="span"
      >
      <span className="status-badge-dot" />
			{active && 'ACTIVE'}
			{paused && 'PAUSED'}
			{pending && 'PENDING'}
			{archived && 'ARCHIVED'}
		</Common>
	);
};

StatusBadge.propTypes = {
	// children: PropTypes.node.isRequired
};

export default StatusBadge;
