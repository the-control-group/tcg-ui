/**
 * Chip
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';


const Chip = ({clickHandler, message}) => {
	return (
		<div className="ui-chip-wrapper">
			<p>
				<span>{message}</span>
				<Icon name="exit" onClick={clickHandler}/>
			</p>
		</div>
	);
};

Chip.propTypes = {
	message: PropTypes.string.isRequired, // Label for chip
	clickHandler: PropTypes.func.isRequired // Functionality fired when the X button in the chip is clicked
};

export default Chip;
