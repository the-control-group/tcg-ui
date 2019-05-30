import React from 'react';
import { storiesOf } from '@storybook/react';
import { SliderFilter } from '../src';


storiesOf('SliderFilter', module)
	.add('SliderFilter', () => (
		<div style={{backgroundColor: 'black'}}>
			<SliderFilter
				name="example"
			/>
		</div>
	));
