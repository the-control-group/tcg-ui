import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusBadge } from '../src';

storiesOf('StatusBadge', module)
	.add('Status Badge', () => (
		<div>
      <StatusBadge />
		</div>
	));
