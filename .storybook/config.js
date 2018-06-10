import { configure } from '@storybook/react';
import 'babel-polyfill';

function loadStories() {
  require('../stories/index.stories.js');
}

configure(loadStories, module);
