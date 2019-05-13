import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import './Icon.less';

const svgs = require.context('../svgs', false, /^\.\/.*\.svg$/);

const Icon = ({ name, size, width = size, height = size, style, className, onClick }) => {
	/**
	 * Loop through the file names in the ./svg directory and see if there's
	 * a match between our supplied `name`
	 */
	let image;
	svgs.keys().map((svg) => {
		const svgName = svg.replace(/\.\/|\.svg/gi, '');

		if(svgName === name) image = require(`../svgs/${svgName}.svg`).default;
	});

	// Height and width default to `size` prop, icons default to inline-block but can be overwritten in style
	const combinedStyles = {
		...style,
		height: Number(height),
		width: Number(width)
	};

	return <object
		className={classnames('ui-icon', className)}
		style={combinedStyles}
		onClick={onClick}
		dangerouslySetInnerHTML={{__html: image}}
	/>;
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	height: (props, propName, componentName) => {
		if(!props.width && !props.height && !props.size) {
			return new Error(`${componentName} requires either 'size' prop, or both 'height' and 'width' props`);
		} else if(props.height && !props.width) {
			return new Error(`${componentName} requires either 'size' prop, or both 'height' and 'width' props`);
		} else if(props.height && !(typeof props.height === 'string' || typeof props.height === 'number')) {
			return new Error(`${componentName} requires 'height' to be of type string or number`);
		}
	},
	width: (props, propName, componentName) => {
		if(!props.width && !props.height && !props.size) {
			return new Error(`${componentName} requires either 'size' prop, or both 'height' and 'width' props`);
		} else if(props.width && !props.height) {
			return new Error(`${componentName} requires either 'size' prop, or both 'height' and 'width' props`);
		} else if(props.width && !(typeof props.width === 'string' || typeof props.width === 'number')) {
			return new Error(`${componentName} requires 'width' to be of type string or number`);
		}
	},
	size: (props, propName, componentName) => {
		if(!props.width && !props.height && !props.size) {
			return new Error(`${componentName} requires either 'size' prop, or both 'height' and 'width' props`);
		} else if(props.size && !(typeof props.size === 'string' || typeof props.size === 'number')) {
			return new Error(`${componentName} requires 'size' to be of type string or number`);
		}
	},
	style: PropTypes.object,
	className: PropTypes.string,
	onClick: PropTypes.func
};

export default Icon;
