import React, { useEffect, useState } from 'react';
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

type ActionModalProps = {
  car: string;
  handleClose?: any;
  open?: boolean;
  switcherReducer?: any;
}

const ActionModal = ({ car, handleClose, open, switcherReducer }: ActionModalProps) => {
  const [isMounted, setIsMounted] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [sendDataError, setSendDataError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
  setIsMounted(true)

  return () => { 
    setIsMounted(false)
    handleClose()
  }

},[])

    const saveData = () => {
      setIsLoading(true);
      // Validate if input is not empty

      const currentDate = DateTime.fromISO(
        switcherReducer.currentDay.timestamp
      ).toFormat('dd-MM-yyyy');

      const db = firebase.firestore();
      const docRef = db.collection('spots-collection').doc('spots');

      // Using transaction to make sure that data is synced with db
      db.runTransaction(async transaction => {
        transaction.set(
          docRef,
          {
            [currentDate]: {
              [car.slice(0, -1)]: inputValue
            }
          },
          { merge: true }
        );
      })
        .then(() => {
          if (isMounted) {
            setIsLoading(false);
          }
        })
        .catch(error => {
          setSendDataError(true);
          setIsLoading(false);
        });
    };

    return (
      <Modal
        open={open}
        onClose={handleClose}
        centered
        size="tiny"
        closeIcon={{
          onClick: handleClose,
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
                  value={car}
                />
                <Input
                  fluid
                  size="big"
                  label="Data:"
                  disabled={true}
                  value={DateTime.fromISO(
                    switcherReducer.currentDay.timestamp
                  ).toFormat('dd-MM-yyyy')}
                />
                <Input
                  fluid
                  size="big"
                  label="Imię:"
                  disabled={false}
                  placeholder="Nazwa"
                  value={inputValue}
                  onChange={event =>
                    setInputValue(event.target.value)
                  }
                />
                {sendDataError ? (
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
          <Button onClick={handleClose} color="red">
            <Icon name="remove" /> Wróć
          </Button>
          <Button
            onClick={saveData}
            loading={isLoading}
            disabled={!inputValue}
            color="green"
          >
            <Icon name="checkmark" /> Zajmij
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(ActionModal);
