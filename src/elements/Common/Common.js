/**
 * Common
 *
 * All other UI elements render down to this component in order to share common features and properties
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getBreakpoint } from '../../util/helpers';

const dataAttrRegex = /^data-/;

const Common = ({
	children,
	classes,
	tag,
	...other
}) => {
	/**
	 * The HTML element/tag name to be rendered
	 */
	const Tag = tag;

	/**
	 * Setup whitelists for style and attribute properties that
	 * can be used by our components
	 */
	let styles = {
		...other.style
	};

	const attributes = {},
		styleFlags = {
			block: { display: 'block' },
			inline: { display: 'inline' },
			inlineBlock: { display: 'inline-block' },
			left: { textAlign: 'left' },
			right: { textAlign: 'right' },
			center: { textAlign: 'center' },
			floatRight: { float: 'right' },
			floatLeft: { float: 'left' }
		},
		styleValues = {
			padding: 'padding',
			paddingTop: 'padding-top',
			paddingBottom: 'padding-bottom',
			paddingLeft: 'padding-left',
			paddingRight: 'padding-right',
			margin: 'margin',
			marginTop: 'margin-top',
			marginBottom: 'margin-bottom',
			marginLeft: 'margin-left',
			marginRight: 'margin-right'
		},
		attributeValues = [
			'id',
			'disabled',
			'checked',
			'type',
			'placeholder',
			'onClick',
			'onKeyDown',
			'onFocus',
			'onBlur',
			'onChange',
			'onSubmit',
			'onScroll',
			'name',
			'value',
			'htmlFor',
			'hidden',
			'maxLength',
			'autoComplete',
			'onMouseEnter',
			'onMouseLeave',
			'onMouseDown',
			'onMouseUp'
		];

	Object.keys(other).forEach(key => dataAttrRegex.test(key) && attributeValues.push(key));

	/**
	 * Loop through our whitelists add anything that applies
	 * to our style/attribute objects
	 */
	Object.keys(styleFlags).forEach(key => {
		if(other[key]) styles = {...styles, ...styleFlags[key]};
	});

	const styleClasses = [];
	Object.keys(styleValues).forEach(key => {
		if(other[key]) styleClasses.push(`common-${styleValues[key]}-${other[key]}`);
	});

	attributeValues.forEach(v => {
		// If the "value" attribute is present, it should be added regardless of truthiness
		if(other[v] || (v === 'value' && other.hasOwnProperty('value'))) {
			attributes[v] = other[v];
		}
	});

	const combinedClasses = classNames(
		classes,
		other['classes' + getBreakpoint()],
		other.className,
		styleClasses
	);

	return (
		<Tag
			className={combinedClasses}
			style={styles}
			{...attributes}
		>
			{children && children}
		</Tag>
	);
};

Common.propTypes = {
	children: PropTypes.node,
	/** HTML element to return */
	tag: PropTypes.string,
	/** String of class names */
	classes: PropTypes.string
};

export default Common;
