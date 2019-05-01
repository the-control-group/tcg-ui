/**
 * Text
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Text = (props) => {
	const {
		caption,
		children,

		// labels
		bold,
		italic,
		uppercase,
		lowercase,

		// font size
		smallest,
		smaller,
		small,
		medium,
		large,
		larger,
		largest,
		...other
	} = props;

	const combinedClasses = classNames(
		'ui-text',
		other.classes,
		{
			smallest,
			smaller,
			small,
			medium,
			large,
			larger,
			largest
		}
	);

	const tag = caption
		? 'span'
		: 'p';

	const style = {};
	if(bold) style.fontWeight = '600';
	if(italic) style.fontStyle = 'italic';
	if(uppercase) style.textTransform = 'uppercase';
	if(lowercase) style.textTransform = 'lowercase';

	return (
		<Common
			cName="Text"
			tag={tag}
			{...other}
			classes={combinedClasses}
			style={style}
		>
			{children}
		</Common>
	);
};

Text.propTypes = {
	children: PropTypes.node.isRequired,
	/** Inline caption (span tag) */
	caption: PropTypes.bool,
	/** String of class names */
	classes: PropTypes.string,
	/** Bold text */
	bold: PropTypes.bool,
	/** Italic Text */
	italic: PropTypes.bool,
	/** Uppercase Text */
	uppercase: PropTypes.bool,
	/** Lowercase Text */
	lowercase: PropTypes.bool,
	/** Extra extra small text */
	smallest: PropTypes.bool,
	/** Extra small text */
	smaller: PropTypes.bool,
	/** Small/normal text (1em) */
	small: PropTypes.bool,
	/** Medium text */
	medium: PropTypes.bool,
	/** Large text */
	large: PropTypes.bool,
	/** Extra large text */
	larger: PropTypes.bool,
	/** Extra extra large text */
	largest: PropTypes.bool
};

export default Text;
