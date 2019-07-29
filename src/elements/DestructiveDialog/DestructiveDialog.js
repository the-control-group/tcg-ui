import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Text from '../Text/Text';

const DestructiveDialog = ({
	title,
	content,
	width = 296,
	primaryActionClickHandler,
	primaryActionContent,
	secondaryActionClickHandler,
	secondaryActionContent
}) => {
	//TODO: Switch out h1/p elements to utilize Text component when ready
	return (
		<Fragment>
			<div className="ui-destructive-dialog-container" style={{ width }}>
				<Text variant="h5" inverse marginTop="none">
					{title}
				</Text>

				<Text className="dialog-content" inverse margin="none">
					{content}
				</Text>

				<div className="button-wrapper">
					<Button onClick={primaryActionClickHandler} bare>
						{primaryActionContent}
					</Button>

					<Button onClick={secondaryActionClickHandler} bare>
						{secondaryActionContent}
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

DestructiveDialog.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	height: PropTypes.number,
	width: PropTypes.number,
	dismiss: PropTypes.func.isRequired,
	primaryActionClickHandler: PropTypes.func.isRequired,
	primaryActionContent: PropTypes.string.isRequired,
	secondaryActionClickHandler: PropTypes.func.isRequired,
	secondaryActionContent: PropTypes.string.isRequired
};

export default DestructiveDialog;
