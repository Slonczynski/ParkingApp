import React from 'react';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

import Tile from './Tile';
import AdjustableInput from './AdjustableInput';
import './scss/ActionModal.scss';

class ActionModal extends React.Component {
  render() {
    return (
      <Modal
        centered
        size="small"
        trigger={
          <div>
            <Tile
              car={this.props.car}
              className={this.props.className}
              name={this.props.name}
            />
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
          <AdjustableInput
            label="Data"
            disabled={true}
            value={DateTime.fromISO(
              this.props.switcherReducer.currentDay.timestamp
            ).toFormat('dd-MM-yyyy')}
          />
          <AdjustableInput
            label="Imię"
            disabled={false}
            value=""
            placeholder="Nazwa"
          />
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
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ActionModal);
