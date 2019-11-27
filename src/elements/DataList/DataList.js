/**
 * Data List
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Div from '../Div/Div';
import Grid from '../Grid/Grid';
import Icon from '../Icon/Icon';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Text from '../Text/Text';

import Common from '../Common/Common';

const DataList = ({
	content, // [{ id: '', text: '', action: () => {}, style: 'toggle' : 'remove', toggled: true/false }]
	...other
}) => {
	const combinedClasses = classNames('data-list', other.classes);

	return (
		<Common classes={combinedClasses} tag="ul" {...other}>
			{content.map(item => (
				<li key={item.id}>
					<Grid itemWidths={[8, 4]}>
						<div>
							<Text variant="body" margin="none" centerY>
								{item.text}
							</Text>
						</div>

						<Div right centerY>
							{item.style === 'toggle' ? (
								<ToggleSwitch toggled={item.toggled} onClick={item.action} />
							) : (
								<Icon name="close" onClick={item.action} className="close-icon" size={20} />
							)}
						</Div>
					</Grid>
				</li>
			))}
		</Common>
	);
};

DataList.propTypes = {
	content: PropTypes.array.isRequired
};

export default DataList;
