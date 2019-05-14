import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './LoadingBar.less';

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
		setTimeout(() => {
			const intervalId = setInterval(this.timer, (this.props.duration / 100));

			this.setState({intervalId});
		}, this.props.delay);
	}

	componentWillUnmount() {
		if(this.state.intervalId) {
			clearInterval(this.state.intervalId);
		}
	}

	timer() {
		this.setState({ percentage: this.state.percentage + 1 });

		if(this.state.percentage === 100) {
			clearInterval(this.state.intervalId);
			this.props.onComplete();
		}
	}

	render() {
		return (
			<div className="ui-loading-bar-wrapper">
				<div className="ui-loading-bar" style={{width: this.state.percentage + '%'}} />
			</div>
		);
	}
}

LoadingBar.propTypes = {
	delay: PropTypes.number,
	duration: PropTypes.number,
	onComplete: PropTypes.func.isRequired
};

LoadingBar.defaultProps = {
	delay: 0, //milliseconds
	duration: 10000 //milliseconds
};

export default LoadingBar;
