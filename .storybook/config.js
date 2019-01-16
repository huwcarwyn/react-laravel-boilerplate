import { configure } from '@storybook/react';

function loadStories() {
  require('../resources/assets/js/stories.js');
}

configure(loadStories, module);
