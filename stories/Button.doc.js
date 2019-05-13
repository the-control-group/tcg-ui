import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';

storiesOf('Button', module)
	.add('Standard Button', () => (
		<div>
			<Button>Standard Button</Button>
			<br /><br />
			<Button loading>Standard Button Loading</Button>
			<br /><br />
			<Button full>Full Width Button</Button>
			<br />
			<Button disabled>Disabled Button</Button>
			<br /><br />
			<Button small>Small Button</Button>
			<br /><br />
			<Button mini>Mini Button</Button>
			<br /><br />
			<Button small outline>Outline Button</Button>
			<br /><br />
			<Button small outline disabled>Disabled Outline Button</Button>
			<br /><br />
			<Button bare>Bare Button</Button>
			<br /><br />
			<Button bare disabled>Bare Disabled Button</Button>
		</div>
	));
