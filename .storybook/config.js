import { configure } from '@storybook/react';

function loadStories() {
  require('../resources/assets/js/tests/stories.js');
}

configure(loadStories, module);
