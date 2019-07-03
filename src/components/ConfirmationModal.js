import React from 'react';
import { Modal, Header, Grid, Button, Icon } from 'semantic-ui-react';
import { DateTime } from 'luxon';
import { connect } from 'react-redux';

import AdjustableInput from './AdjustableInput';

class ConfirmationModal extends React.Component {
  render() {
    const currentDate = DateTime.fromISO(
      this.props.switcherReducer.currentDay.timestamp
    ).toFormat('dd-MM-yyyy');
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.handleClose}
        centered
        size="tiny"
        closeIcon={{
          onClick: this.props.handleClose,
          style: { top: '1.0535rem', right: '1rem' },
          color: 'black',
          name: 'close'
        }}
      >
        <Header icon="car" content="Czy na pewno chcesz zwolnić to miejsce?" />
        <Grid>
          <Grid.Row centered columns={1}>
            <Grid.Column>
              <Modal.Content>
                <AdjustableInput
                  label="Miejsce:"
                  disabled={true}
                  value={this.props.car}
                />

                <AdjustableInput
                  label="Data:"
                  disabled={true}
                  value={currentDate}
                />
                <AdjustableInput
                  label="Imię:"
                  disabled={true}
                  value={this.props.name}
                />
              </Modal.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal.Actions>
          <Button onClick={this.props.handleClose} color="red">
            <Icon name="remove" /> Wróć
          </Button>
          <Button color="green">
            <Icon name="checkmark" /> Zwolnij
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ConfirmationModal);
