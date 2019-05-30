import PropTypes from 'prop-types';
import React from 'react';

const SliderFilter = ({name, min = 0, max = 100}) => {
	return (
		<div className="ui-slider-filter-container">
			<input className="slider" type="range" name={name} min={min} max={max}/>
		</div>
	);
};


SliderFilter.propTypes = {
	name: PropTypes.string.isRequired,
	min: PropTypes.number,
	max: PropTypes.number
};


export default SliderFilter;
