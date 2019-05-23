import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../src';

storiesOf('Input', module)
	.add('Input', () => (
		<div>
			<Input
				label="this is a label"
				name="doc"
				handleChange={()=>alert('change')}
				defaultValue={false}
				type="checkbox"
			/>
			<Input
				label="this is another label"
				name="doc2"
				handleChange={()=>alert('switched to this one')}
				defaultValue={false}
				type="checkbox"
			/>
			<Input
				label="this is the last label"
				name="doc3"
				handleChange={()=>alert('switched to this one')}
				defaultValue={false}
				type="checkbox"
			/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<Input
				label="radio"
				name="radio-example"
				handleChange={()=>alert('switched to this one')}
				defaultValue={true}
				type="radio"
			/>
			<Input
				label="radio"
				name="radio-example"
				handleChange={()=>alert('switched to this one')}
				defaultValue={false}
				type="radio"
			/>
		</div>
	));
