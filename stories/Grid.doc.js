import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../src';

storiesOf('Grid', module)
	.add('Grid Component', () => (
		<div>
			<Grid>
				<div>something</div>
				<div>something</div>
				<div>something</div>
			</Grid>

			<hr />

			<Grid itemWidths={[3, 6, 3]}>
				<div>something</div>
				<div style={{ 'background-color': '#ddd' }}>something</div>
				<div>something</div>
			</Grid>
		</div>
	));
