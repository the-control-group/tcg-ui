import React from 'react';
import { storiesOf } from '@storybook/react';
import { DataList } from '../src';

storiesOf('DataList', module)
	.add('DataList', () => (
		<div>
			<div>
				<DataList
          rows={[
            {
              text: 'Data Entry',
              xFn: () => {alert('Clicked')},
            },
            {
              text: 'Data Entry',
              xFn: () => {alert('Clicked')},
            },
            {
              text: 'Data Entry',
              xFn: () => {alert('Clicked')},
            },
            {
              text: 'Data Entry',
              xFn: () => {alert('Clicked')},
            },
            {
              text: 'This data entry is too long to fit on one line, so it wraps.',
              xFn: () => {alert('Clicked')},
            },
          ]}
          label="Label"
				/>
			</div>
		</div>
	));
