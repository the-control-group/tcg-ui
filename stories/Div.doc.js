import React from 'react';
import { storiesOf } from '@storybook/react';
import { Div } from '../src';


storiesOf('Div', module)
	.add('Div', () => (
		<div>
			<Div card>Card</Div>
			<Div>
				<Div subsection>Subsection</Div>
			</Div>
			<Div item>Item 1</Div>
			<Div item>Item 2</Div>
			<Div item>Item 3</Div>
			<Div item>Item 4</Div>

		</div>
	));
