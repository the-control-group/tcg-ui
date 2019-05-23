import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../src';

storiesOf('Input', module)
	.add('Input', () => (
		<div>
			<Input
				label="this is a label"
				name="doc"
				type="checkbox"
				id="example-1"
			/>
			<br/>
			<Input
				label="this is another label"
				name="doc2"
				type="checkbox"
				id="example-2"
			/>
			<br/>
			<Input
				label="this is the last label"
				name="doc3"
				type="checkbox"
				id="example-3"
			/>
			<br/>
			<br/>
			<br/>
			<br/>
			<Input
				label="this is a radio example"
				name="radio-example"
				type="radio"
				id="example-4"
			/>
			<br/>
			<Input
				label="these are the labels"
				name="radio-example"
				type="radio"
				id="example-5"
			/>
		</div>
	));
