import React from 'react';
import { storiesOf } from '@storybook/react';
import { FlexRow, Flex } from '../src';

storiesOf('Flex', module)
	.add('Flex Component', () => (
		<FlexRow>
			<Flex>something</Flex>
			<Flex>something else</Flex>
		</FlexRow>
	));
