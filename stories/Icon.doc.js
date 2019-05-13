import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../src';

storiesOf('Icon', module)
	.add('Icon', () => (
		<div>
			<Icon name="email" size={15} />
		</div>
	));
