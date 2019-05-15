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
		</div>
	));
