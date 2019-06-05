import React from 'react';
import { storiesOf } from '@storybook/react';
import { Chip } from '../src';

storiesOf('Chip', module).add('Chip', () => (
	<div>
		<Chip
			message="This is a Chip"
			clickHandler={() => alert('this is a click handler')}
		/>
	</div>
));
