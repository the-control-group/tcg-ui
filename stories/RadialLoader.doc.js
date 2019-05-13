import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadialLoader } from '../src';

storiesOf('RadialLoader', module)
	.add('RadialLoader', () => (
		<div>
			<RadialLoader height={32} width={32} />
		</div>
	));
