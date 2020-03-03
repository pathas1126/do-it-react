import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../04/InputWithStyles';
import withError from '../05/withError';

const InputWithError = withError('올바르지 못한 값입니다.')(Input);

storiesOf('WithError', module)
  .addWithJSX('Default Settings', () => <InputWithError name="name" hasError />)
  .addWithJSX('errorMessage', () => (
    <InputWithError name="name" hasError errorMessage="필수 항목인데요?;" />
  ));
