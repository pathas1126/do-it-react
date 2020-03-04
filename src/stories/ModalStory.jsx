import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../06/Modal';
import Text from '../04/Text';
import Button from '../04/Button';
import ButtonWithModal from '../06/ButtonWithModal';
import ModalProvider, { Consumer } from '../06/ModalProvider';

storiesOf('Modal', module)
  .addWithJSX('Default Settings', () => (
    <Modal>
      <div>
        <Text>정말로 삭제하시겠습니까?</Text>
      </div>
      <Button primary>예</Button>
      <Button>닫기</Button>
    </Modal>
  ))
  .addWithJSX('ButtonWithModal', () => <ButtonWithModal />)
  .addWithJSX('ModalProvier', () => (
    <ModalProvider>
      <div>
        <Text>다음 버튼을 눌러 모달 실행</Text>
        <Consumer>{({ openModal }) => <Button onPress={() => openModal()}>삭제</Button>}</Consumer>
      </div>
    </ModalProvider>
  ));
