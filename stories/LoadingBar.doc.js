import React from 'react';
import { storiesOf } from '@storybook/react';
import { LoadingBar } from '../src';

storiesOf('LoadingBar', module)
	.add('LoadingBar', () => (
		<div>
			<div>
				<p>Timed Loading Bar</p>
				<LoadingBar
					delay={3000}
					duration={10000}
					type='timer'
					onComplete={()=>alert('onComplete function fired!')}
				/>
			</div>
			<div>
				<p>Completeness Loading Bar</p>
				<LoadingBar
					type='completeness'
					percentComplete={60}
				/>
			</div>
		</div>
	));
