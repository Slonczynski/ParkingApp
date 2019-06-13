import React from 'react';
import { Header, Button, Modal, Icon } from 'semantic-ui-react';
import Tile from './Tile';

const TileWithModal = props => (
  <Modal
    centered
    size="small"
    trigger={
      <div>
        <Tile car={props.car} />
      </div>
    }
    closeIcon
  >
    <Header icon="archive" content="Archive Old Messages" />
    <Modal.Content>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color="red">
        <Icon name="remove" /> No
      </Button>
      <Button color="green">
        <Icon name="checkmark" /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
);

export default TileWithModal;
