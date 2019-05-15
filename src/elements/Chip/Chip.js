/**
 * Chip
 */

import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';

const Chip = ({clickHandler, message}) => {
	return (
		<div className="chip-wrapper">
			<p>{message}
				<span onClick={()=>clickHandler()}>
				</span>
			</p>
		</div>
	);
};

Chip.propTypes = {
	message: PropTypes.string.isRequired, // Label for chip
	clickHandler: PropTypes.func.isRequired // Functionality fired when the X button in the chip is clicked
};

export default Chip;
