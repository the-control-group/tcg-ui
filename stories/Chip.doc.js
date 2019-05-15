import React from 'react';
import { storiesOf } from '@storybook/react';
import { Chip } from '../src';

storiesOf('Chip', module)
	.add('Chip', () => (
		<div>
			<Chip />
		</div>
	));
