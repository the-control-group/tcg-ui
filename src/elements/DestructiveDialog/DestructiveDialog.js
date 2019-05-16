
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button/Button';

const DestructiveDialog = ({
	title,
	content,
	leftButtonClickHandler,
	leftButtonContent,
	rightButtonClickHandler,
	rightButtonContent}) => {
//TODO: Switch out h1/p elements to utilize Text component when ready
	return(
		<div className="ui-destructive-dialog-container">
			<h1 className="destructive-dialog-title">{title}</h1>
			<p className="destructive-dialog-content">{content}</p>
			<Button
				onClick={leftButtonClickHandler}
				bare
			>
				{leftButtonContent}
			</Button>
			<Button
				onClick={rightButtonClickHandler}
				bare
			>
				{rightButtonContent}
			</Button>
		</div>
	);
};

DestructiveDialog.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	leftButtonClickHandler: PropTypes.func.isRequired,
	leftButtonContent: PropTypes.string.isRequired,
	rightButtonClickHandler: PropTypes.func.isRequired,
	rightButtonContent: PropTypes.string.isRequired
};

export default DestructiveDialog;
