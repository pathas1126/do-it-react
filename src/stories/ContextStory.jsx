import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageComponent from '../06/HomePageComponent';
import HomePageWithProvider from '../06/HomePageWithProvider';
import HomePageWithTwoProvider from '../06/HomePageWithTwoProvider';

storiesOf('HomePageComponent', module)
  .addWithJSX('Context', () => <HomePageComponent />)
  .addWithJSX('Provider', () => <HomePageWithProvider />)
  .addWithJSX('Two Provider', () => <HomePageWithTwoProvider />);
