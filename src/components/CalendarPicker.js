import React from 'react';
import Calendar from 'react-calendar';
import { Grid, Modal, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import { bindActionCreators } from 'redux';
import {
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
    this.setState(
      { ...this.state, date },
      // Making callback here prevents the state being one step behind
      () => (
        this.props.updateCurrentDay(DateTime.fromJSDate(this.state.date)),
        this.props.updateNextDay(
          DateTime.fromJSDate(this.state.date).plus({ days: 1 })
        ),
        this.props.updatePreviousDay(
          DateTime.fromJSDate(this.state.date).minus({ days: 1 })
        )
      )
    );
    this.props.handleClose();
  };

  render() {
    return (
      <div>
        <Modal
          basic
          open={this.props.openModal}
          onClose={this.props.handleClose}
        >
          <Header
            className="calendar-header"
            centered="true"
            content="Wybierz datę:"
          />
          <Modal.Content>
            <Grid centered>
              <Calendar
                className="react-calendar"
                calendarType="ISO 8601"
                locale="pl-PL"
                value={this.state.date}
                onChange={this.onChange}
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
