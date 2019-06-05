import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../src';

/*eslint-disable*/
// Enable console.logs for this file

storiesOf('Input', module).add('Input', () => (
	<div>
		<Input
			label="this is a label"
			name="doc"
			type="checkbox"
			id="example-1"
			inverse={false}
			handleChange={() => console.log('handle change')}
		/>
		<br />
		<Input
			label="this is another label"
			name="doc2"
			type="checkbox"
			id="example-2"
			inverse={false}
			handleChange={() => console.log('handle change')}
		/>
		<br />
		<Input
			label="this is the last label"
			name="doc3"
			type="checkbox"
			id="example-3"
			inverse={false}
			handleChange={() => console.log('handle change')}
		/>
		<br />
		<Input
			label="this shows selection for removal with inverted colors"
			name="doc3"
			remove={true}
			inverse={true}
			type="checkbox"
			id="example-4"
			handleChange={() => console.log('handle change')}
		/>
		<br />
		<Input
			label="this shows selection for removal with standard colors"
			name="doc5"
			remove={true}
			inverse={false}
			type="checkbox"
			id="example-5"
			handleChange={() => console.log('handle change')}
		/>
		<br />
		<br />
		<Input
			label="this is a radio example"
			name="radio-example"
			type="radio"
			id="example-6"
			inverse={false}
			handleChange={() => console.log('handle change')}
		/>
		<br />
		<Input
			label="this is another radio example"
			name="radio-example"
			type="radio"
			id="example-7"
			inverse={false}
			handleChange={() => console.log('handle change')}
		/>
	</div>
));

/*eslint-enable*/
