import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const DestructiveDialog = ({
	title,
	content,
	height = 128,
	width = 280,
	primaryActionClickHandler,
	primaryActionContent,
	secondaryActionClickHandler,
	secondaryActionContent
}) => {
	//TODO: Switch out h1/p elements to utilize Text component when ready
	return (
		<div
			className="ui-destructive-dialog-container"
			style={{ height, width }}
		>
			<h1 className="destructive-dialog-title">{title}</h1>
			<p className="destructive-dialog-content">{content}</p>
			<div className="destructive-dialog-button-wrapper">
				<Button onClick={primaryActionClickHandler} bare>
					{primaryActionContent}
				</Button>
				<Button onClick={secondaryActionClickHandler} bare>
					{secondaryActionContent}
				</Button>
			</div>
		</div>
	);
};

DestructiveDialog.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	height: PropTypes.number,
	width: PropTypes.number,
	primaryActionClickHandler: PropTypes.func.isRequired,
	primaryActionContent: PropTypes.string.isRequired,
	secondaryActionClickHandler: PropTypes.func.isRequired,
	secondaryActionContent: PropTypes.string.isRequired
};

export default DestructiveDialog;
