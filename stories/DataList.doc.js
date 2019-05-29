import React from 'react';
import { storiesOf } from '@storybook/react';
import { DataList } from '../src';

storiesOf('DataList', module)
	.add('DataList', () => (
		<div>
			<div>
				<DataList
					// onClick={()=>alert('Clicked!')}
          rows={[
            'Data Entry',
            'Data Entry',
            'Data Entry',
            'Data Entry',
            'This data entry is too long to fit on one line, so it wraps.',
          ]}
          label="Label"
				/>
			</div>
		</div>
	));
