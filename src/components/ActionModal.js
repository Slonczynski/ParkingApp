import React from 'react';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';

import Tile from './Tile';
import Input from './Input';
import './scss/ActionModal.scss';

const ActionModal = props => (
  <Modal
    centered
    size="small"
    trigger={
      <div>
        <Tile car={props.car} />
      </div>
    }
    closeIcon={{
      style: { top: '1.0535rem', right: '1rem' },
      color: 'black',
      name: 'close'
    }}
  >
    <Header icon="car" content="Czy na pewno chcesz zająć to miejsce?" />
    <Modal.Content>
      <Input disabled="true" />
    </Modal.Content>
    <Modal.Actions>
      <Button color="red">
        <Icon name="remove" /> Wróć
      </Button>
      <Button color="green">
        <Icon name="checkmark" /> Zajmij
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ActionModal;
