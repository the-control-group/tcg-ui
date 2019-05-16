import React from 'react';
import { storiesOf } from '@storybook/react';
import { ToggleSwitch } from '../src';

storiesOf('ToggleSwitch', module)
	.add('ToggleSwitch', () => (
		<div>
			<span>"off"</span>
			<div>
				<ToggleSwitch
					handleClick={()=>alert('enabled!')}
					toggled={false}
				/>
			</div>
			<br/>
			<span>"on"</span>
			<div>
				<ToggleSwitch
					handleClick={()=>alert('disabled!')}
					toggled={true}
				/>
			</div>
			<br/>
			<span>"disabled"</span>
			<div>
				<ToggleSwitch
					handleClick={()=>alert('enabled!')}
					toggled={false}
					disabled={true}
				/>
			</div>
		</div>
	));
