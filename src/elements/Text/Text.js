/**
 * Text
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Text = props => {
	const {
		children,
		variant = 'body-1', // h1-h6, body-2, subtitle, subtitle-2, caption, overline
		bold,
		italic,
		uppercase,
		lowercase,
		...other
	} = props;

	const combinedClasses = classNames('ui-text', variant, other.classes);

	const tag =
		tag === ('h1' || 'h2' || 'h3' || 'h4' || 'h5' || 'h6') ? variant : 'p';

	const style = {};
	if (bold) style.fontWeight = '600';
	if (italic) style.fontStyle = 'italic';
	if (uppercase) style.textTransform = 'uppercase';
	if (lowercase) style.textTransform = 'lowercase';

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
	variant: PropTypes.string,
	bold: PropTypes.bool,
	italic: PropTypes.bool,
	uppercase: PropTypes.bool,
	lowercase: PropTypes.bool
};

export default Text;
