import React from 'react';
import { Modal, Header, Icon, Button, Grid, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import firebase from 'firebase/app';

import AdjustableInput from './AdjustableInput';
import './scss/ActionModal.scss';

class ActionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const saveData = () => {
      const currentDate = DateTime.fromISO(
        this.props.switcherReducer.currentDay.timestamp
      ).toFormat('dd-MM-yyyy');

      const db = firebase.firestore();
      db.collection('spots-collection')
        .doc('spots')
        .set(
          {
            [currentDate]: {
              [this.props.car.slice(0, -1)]: this.state.inputValue
            }
          },
          { merge: true }
        );
      // add callback
      this.props.handleClose();
    };

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
        <Header icon="car" content="Czy na pewno chcesz zająć to miejsce?" />
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
                  value={DateTime.fromISO(
                    this.props.switcherReducer.currentDay.timestamp
                  ).toFormat('dd-MM-yyyy')}
                />
                <Input
                  label="Imię:"
                  disabled={false}
                  placeholder="Nazwa"
                  value={this.state.value}
                  onChange={e => this.setState({ inputValue: e.target.value })}
                />
              </Modal.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal.Actions>
          <Button onClick={this.props.handleClose} color="red">
            <Icon name="remove" /> Wróć
          </Button>
          <Button onClick={saveData} color="green">
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
