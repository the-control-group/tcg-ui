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
		return (
			<div></div>
		)
	}
}


SliderFilter.propTypes = {
	loadingBarType: PropTypes.string.isRequired,
	percentComplete: PropTypes.number,
	delay: PropTypes.number,
	duration: PropTypes.number,
	onComplete: PropTypes.func
};


export default SliderFilter;
