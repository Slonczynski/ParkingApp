import React from 'react';
import Calendar from 'react-calendar';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

import './scss/CalendarPicker.scss';

class CalendarPicker extends React.Component {
  // Getting current date from switcherReducer timestamp to maintain data coherency.
  state = {
    date: new Date(this.props.switcherReducer.currentDay.timestamp)
  };

  onChange = date => this.setState({ date });

  render() {
    const activeDay = DateTime.fromJSDate(this.state.date).toFormat(
      'dd-MM-yyyy'
    );
    console.log(activeDay);
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

export default connect(mapStateToProps)(CalendarPicker);
