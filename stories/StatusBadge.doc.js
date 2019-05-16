import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusBadge } from '../src';

storiesOf('StatusBadge', module).add('Status Badge', () => (
	<div style={{ 'background-color': '#121212', padding: '2em' }} >
		<StatusBadge status="active" />
		<br />
		<br />
		<StatusBadge status="paused" />
		<br />
		<br />
		<StatusBadge status="pending" />
		<br />
		<br />
		<StatusBadge status="archived"
		/>
	</div>
));
