import React from 'react';
import { storiesOf } from '@storybook/react';
import { DataList } from '../src';

storiesOf('DataList', module)
	.add('DataList', () => (
		<div>
			<div>
				<DataList
					// onClick={()=>alert('Clicked!')}
          rows={['Data Entry','Data Entry','Data Entry']}
          label="Label"
				/>
			</div>
		</div>
	));
