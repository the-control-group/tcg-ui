import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusBadge } from '../src';

storiesOf('StatusBadge', module).add('Status Badge', () => (
	<div
		style={{
			'background-color':
        '#121212',
        padding: "2em",
		}}
	>
		<StatusBadge
			active
		/>
		<br />
		<br />
		<StatusBadge
			paused
		/>
		<br />
		<br />

		<StatusBadge
			pending
		/>
		<br />
		<br />

		<StatusBadge
			archived
		/>
	</div>
));
