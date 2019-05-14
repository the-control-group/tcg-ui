import React from 'react';
import { storiesOf } from '@storybook/react';
import { LoadingBar } from '../src';

storiesOf('LoadingBar', module)
	.add('LoadingBar', () => (
		<div>
			<LoadingBar
				delay={3000}
				duration={10000}
				onComplete={()=>alert('complete!')}
			/>
		</div>
	));
