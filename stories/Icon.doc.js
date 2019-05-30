import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../src';

storiesOf('Icon', module)
	.add('Icon', () => (
		<div>
			<Icon name="email" size={15} />
			<br/>
			<Icon name="exit" size={15} />
			<br />
			<Icon name="foobar" size={15} />
		</div>
	));
