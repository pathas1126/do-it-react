import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchFilterReduxApp from '../07/SearchFilterReduxApp';

storiesOf('SearchFilterReduxApp', module).addWithJSX('Default Settings', () => (
  <SearchFilterReduxApp />
));
