import React from 'react';
import { storiesOf } from '@storybook/react';
import { DataList } from '../src';

storiesOf('DataList', module)
	.add('DataList', () => (
		<div>
			<div>
				<DataList
					// handleClick={()=>alert('enabled!')}
					rows={['Data Entry','Data Entry','Data Entry']}
				/>
			</div>
		</div>
	));
