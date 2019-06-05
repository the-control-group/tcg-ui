import React from 'react';
import { storiesOf } from '@storybook/react';
import { FlexRow, Flex } from '../src';

storiesOf('Flex', module).add('Flex Component', () => (
	<div>
		<FlexRow>
			<Flex>something</Flex>
			<Flex>something else</Flex>
		</FlexRow>

		<br />
		<hr />
		<br />

		<FlexRow breakSmall>
			<Flex>something</Flex>
			<Flex fixed="200" style={{ 'background-color': 'red' }}>
				something else
			</Flex>
		</FlexRow>
	</div>
));
