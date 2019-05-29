import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SliderFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: null
		};
	}

	render() {
		const { name } = this.props;

		return (
			<div className="ui-slider-filter-container">
				<input className="slider" type="range" name={name} min="0" max="100"/>
				{this.state.position}
			</div>
		);
	}
}


SliderFilter.propTypes = {
	name: PropTypes.string.isRequired
};


export default SliderFilter;
