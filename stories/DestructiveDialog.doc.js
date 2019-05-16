import React from 'react';
import { storiesOf } from '@storybook/react';
import { DestructiveDialog } from '../src';

storiesOf('DestructiveDialog', module)
	.add('DestructiveDialog', () => (
		<div>
			<DestructiveDialog
				title="Title"
				content="Supporting message goes here. Ex: This will add 20 users."
				leftButtonClickHandler={()=>alert('click handler for left button fired!')}
				leftButtonContent="Left Button"
				rightButtonClickHandler={()=>alert('click handler for right button fired!')}
				rightButtonContent="Right Button"
			/>
		</div>
	));
