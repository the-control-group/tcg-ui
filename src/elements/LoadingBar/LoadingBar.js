import PropTypes from 'prop-types';
import React, { Component } from 'react';

class LoadingBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			percentage: 0,
			intervalId: null
		};

		this.timer = this.timer.bind(this);
	}

	componentDidMount() {
		if (this.props.loadingBarType === 'timer') {
			// Apply delay upon component mount
			setTimeout(() => {
				// Fire timer function every 100th of duration time (ex: for a duration of 10000 ms, timer fn would fire every 1000 ms)
				const intervalId = setInterval(
					this.timer,
					this.props.duration / 100
				);

				// Set intervalId in state in order to pass into clearInterval when component unmounts
				this.setState({ intervalId });
			}, this.props.delay);
		}
	}

	componentWillUnmount() {
		if (this.state.intervalId) {
			clearInterval(this.state.intervalId);
		}
	}

	timer() {
		// Increment percentage to fill loader
		this.setState({ percentage: this.state.percentage + 1 });

		if (this.state.percentage === 100) {
			// Once the the loader has filled, stop firing functionality and execute onComplete method
			clearInterval(this.state.intervalId);

			//Fire onComplete functionality if available
			if (this.props.onComplete) {
				this.props.onComplete();
			}
		}
	}

	render() {
		// Check here for percentage from props or if it's populated in state (percent complete loading bar vs. timer loading bar)
		const percentage = this.props.percentComplete
			? this.props.percentComplete
			: this.state.percentage;

		return (
			<div className="ui-loading-bar-wrapper">
				<div className="bar" style={{ width: percentage + '%' }} />
			</div>
		);
	}
}

LoadingBar.propTypes = {
	loadingBarType: PropTypes.string.isRequired,
	percentComplete: PropTypes.number,
	delay: PropTypes.number,
	duration: PropTypes.number,
	onComplete: PropTypes.func
};

LoadingBar.defaultProps = {
	delay: 0, //milliseconds
	duration: 10000 //milliseconds
};

export default LoadingBar;
