import React from 'react';
import { Modal, Header, Icon, Button, Grid, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import firebase from 'firebase/app';

import './scss/ActionModal.scss';
import './scss/Input.scss';

class ActionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', placeholderValue: 'Nazwa', error: false };
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const saveData = () => {
      // Validate if input is not empty
      if (this.state.inputValue !== '') {
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
          )
          .then(() => console.log('Data saved.'))
          .catch(error => {
            console.log('Data could not be saved.' + error);
          });

        this.props.handleClose();
      } else {
        this.setState({
          placeholderValue: 'Zapomniałeś się przedstawić!',
          error: true
        });
      }
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
                  placeholder={this.state.placeholderValue}
                  value={this.state.value}
                  onChange={e => this.setState({ inputValue: e.target.value })}
                  error={this.state.error}
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
