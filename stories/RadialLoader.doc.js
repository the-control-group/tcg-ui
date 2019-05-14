import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadialLoader } from '../src';

storiesOf('RadialLoader', module)
	.add('RadialLoader', () => (
		<div>
			<RadialLoader size={32} />
		</div>
	));
