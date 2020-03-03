import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withHoC from '../05/withHoC';

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('WithHoC', module)
  .addWithJSX('Default Settings', () => (
    <div>
      <ButtonWithHoC>Hi</ButtonWithHoC>
      <TextWithHoC>Hi</TextWithHoC>
    </div>
  ))
  .addWithJSX('Large', () => (
    <div>
      <ButtonWithHoC large>Hi</ButtonWithHoC>
      <TextWithHoC large>Hi</TextWithHoC>
    </div>
  ));
