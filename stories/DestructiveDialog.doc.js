import React from 'react';
import { storiesOf } from '@storybook/react';
import { DestructiveDialog } from '../src';

storiesOf('DestructiveDialog', module)
	.add('DestructiveDialog', () => (
		<div>
			<DestructiveDialog
				title="Title"
				content="Supporting message goes here. Ex: This will add 20 users."
				primaryActionClickHandler={()=>alert('click handler for primary action button fired!')}
				primaryActionContent="Button"
				secondaryActionClickHandler={()=>alert('click handler for secondary action button fired!')}
				secondaryActionContent="Button"
			/>
		</div>
	));
