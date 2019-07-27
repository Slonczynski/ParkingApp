import React from 'react';
import { Modal, Header, Grid, Button, Icon, Input } from 'semantic-ui-react';
import { DateTime } from 'luxon';
import { connect } from 'react-redux';
import firebase from 'firebase/app';

import './scss/Input.scss';

class ConfirmationModal extends React.Component {
  render() {
    //  Destructuring assignment
    const { switcherReducer, open, name, car } = this.props;
    const deleteData = () => {
      // Initialize database
      const db = firebase.firestore();

      // Get current date
      const currentDate = DateTime.fromISO(
        switcherReducer.currentDay.timestamp
      ).toFormat('dd-MM-yyyy');

      // Create reference to document
      const spotRef = db.collection('spots-collection').doc('spots');
      // Get spot number
      const spotNumber = car.slice(0, -1);
      // Combine previous values
      const fullReference = currentDate + '.' + spotNumber;
      // Delete data
      spotRef
        .update({
          [fullReference]: firebase.firestore.FieldValue.delete()
        })
        .then()
        .catch(error => {
          console.log('Data could not be saved.' + error);
        });

      this.props.handleClose();
    };
    const currentDate = DateTime.fromISO(
      switcherReducer.currentDay.timestamp
    ).toFormat('dd-MM-yyyy');

    return (
      <Modal
        open={open}
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
        <Header
          icon="bicycle"
          content={`${name}, czy na pewno chcesz zwolnić to miejsce? `}
        />
        <Grid>
          <Grid.Row centered columns={1}>
            <Grid.Column>
              <Modal.Content>
                <Input
                  fluid
                  size="big"
                  label="Miejsce:"
                  disabled={true}
                  value={car}
                />

                <Input
                  fluid
                  size="big"
                  label="Data:"
                  disabled={true}
                  value={currentDate}
                />
                <Input
                  fluid
                  size="big"
                  label="Imię:"
                  disabled={true}
                  value={name}
                />
              </Modal.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal.Actions>
          <Button onClick={this.props.handleClose} color="red">
            <Icon name="remove" /> Wróć
          </Button>
          <Button onClick={deleteData} color="green">
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
