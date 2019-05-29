import React from 'react';
import { storiesOf } from '@storybook/react';
import { SliderFilter } from '../src';


storiesOf('SliderFilter', module)
	.add('SliderFilter', () => (
		<div style={{"background-color": "black"}}>
			<SliderFilter
				name="example"
			/>
		</div>
	));
