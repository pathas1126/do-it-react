import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageWithLoadData, PageWithLoadDataAndLoading } from '../05/lifecycle';

storiesOf('Lifecycle', module)
  .addWithJSX('loadData', () => (
    <PageWithLoadData loadData={() => fetch('/').then(() => 'hello')} />
  ))
  .addWithJSX('Loading Message', () => (
    <PageWithLoadDataAndLoading loadData={() => fetch('/').then(() => 'hello')} />
  ));
