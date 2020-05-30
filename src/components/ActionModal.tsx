import React from 'react';
import {
  Modal,
  Header,
  Icon,
  Button,
  Grid,
  Input,
  Message
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import firebase from 'firebase/app';

import './scss/ActionModal.scss';
import './scss/Input.scss';

class ActionModal extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      sendDataError: false,
      isLoading: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.props.handleClose();
  }

  render() {
    const saveData = () => {
      this.setState({ isLoading: true });
      // Validate if input is not empty

      const currentDate = DateTime.fromISO(
        this.props.switcherReducer.currentDay.timestamp
      ).toFormat('dd-MM-yyyy');

      const db = firebase.firestore();
      const docRef = db.collection('spots-collection').doc('spots');

      // Using transaction to make sure that data is synced with db
      db.runTransaction(async transaction => {
        transaction.set(
          docRef,
          {
            [currentDate]: {
              [this.props.car.slice(0, -1)]: this.state.inputValue
            }
          },
          { merge: true }
        );
      })
        .then(() => {
          if (this._isMounted) {
            this.setState({ isLoading: false });
          }
        })
        .catch(error => {
          this.setState({ sendDataError: true, isLoading: false });
        });
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
                <Input
                  fluid
                  size="big"
                  label="Miejsce:"
                  labelPosition="left"
                  disabled={true}
                  value={this.props.car}
                />
                <Input
                  fluid
                  size="big"
                  label="Data:"
                  disabled={true}
                  value={DateTime.fromISO(
                    this.props.switcherReducer.currentDay.timestamp
                  ).toFormat('dd-MM-yyyy')}
                />
                <Input
                  fluid
                  size="big"
                  label="Imię:"
                  disabled={false}
                  placeholder="Nazwa"
                  value={this.state.value}
                  onChange={event =>
                    this.setState({ inputValue: event.target.value })
                  }
                />
                {this.state.sendDataError ? (
                  <Message
                    error
                    header="Dane nie zostały zapisane"
                    content="Sprawdź swoje połączenie z interentem i spróbuj ponownie."
                  />
                ) : null}
              </Modal.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal.Actions>
          <Button onClick={this.props.handleClose} color="red">
            <Icon name="remove" /> Wróć
          </Button>
          <Button
            onClick={saveData}
            loading={this.state.isLoading}
            disabled={!this.state.inputValue}
            color="green"
          >
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
