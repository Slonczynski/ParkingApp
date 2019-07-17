import React from 'react';
import Calendar from 'react-calendar';
import { Grid } from 'semantic-ui-react';
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
  state = {
    date: new Date(this.props.switcherReducer.currentDay.timestamp)
  };

  onChange = date => {
    this.setState({ date });
  };

  componentDidUpdate(prevProps, prevState) {
    const chosenDayTimestamp = DateTime.fromJSDate(this.state.date);
    console.log(chosenDayTimestamp);
    if (
      chosenDayTimestamp.toISODate() !==
      this.props.switcherReducer.currentDay.timestamp.toISODate()
    ) {
      this.props.updateCurrentDay(chosenDayTimestamp);
      this.props.updateNextDay(chosenDayTimestamp.plus({ days: 1 }));
      this.props.updatePreviousDay(chosenDayTimestamp.minus({ days: 1 }));
    }
  }

  render() {
    return (
      <div>
        <Grid centered>
          <Calendar
            className="react-calendar"
            calendarType="ISO 8601"
            locale="pl-PL"
            onChange={this.onChange}
            value={this.state.date}
          />
        </Grid>
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
