import React from 'react';
import Calendar from 'react-calendar';
import { Grid, Modal, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import { bindActionCreators } from 'redux';
import {
  previousToCurrentDay,
  nextToCurrentDay,
  updatePreviousDay,
  updateNextDay,
  updateCurrentDay
} from './store/actions/actionCreator';

import './scss/CalendarPicker.scss';

class CalendarPicker extends React.Component {
  // Getting current date from switcherReducer timestamp to maintain data coherency.
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(this.props.switcherReducer.currentDay.timestamp),
      openModal: true
    };
  }

  onChange = date => {
    this.setState({ date });
    const chosenDay = DateTime.fromJSDate(this.state.date);
    this.hideModal();
    // Check if date in chosenDayTime is the same as the one in store
    if (
      chosenDay.toISODate() !==
      this.props.switcherReducer.currentDay.timestamp.toISODate()
    ) {
      this.props.updateCurrentDay(chosenDay);
      this.props.updateNextDay(chosenDay.plus({ days: 1 }));
      this.props.updatePreviousDay(chosenDay.minus({ days: 1 }));
    }
  };
  hideModal = () => {
    if (this.state.openModal !== false) {
      this.setState({ ...this.state, openModal: false });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Modal basic open={this.state.openModal} handleClose={this.hideModal}>
          <Header
            className="calendar-header"
            centered
            content="Wybierz datę:"
          />
          <Modal.Content>
            <Grid centered>
              <Calendar
                className="react-calendar"
                calendarType="ISO 8601"
                locale="pl-PL"
                onChange={this.onChange}
                value={this.state.date}
              />
            </Grid>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      previousToCurrentDay,
      nextToCurrentDay,
      updatePreviousDay,
      updateNextDay,
      updateCurrentDay
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarPicker);
