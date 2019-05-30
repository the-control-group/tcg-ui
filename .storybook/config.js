import { configure } from '@storybook/react';

import './storybook.less';

const req = require.context('../stories', true, /\.doc\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
