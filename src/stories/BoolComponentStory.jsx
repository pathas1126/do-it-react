import React from 'react';
import { storiesOf } from '@storybook/react';

import BoolComponent from '../03/BoolComponent';

storiesOf('BoolComponent', module)
  .add('기본 설정', () => <BoolComponent />)
  .add('bored 설정', () => <BoolComponent bored />);
