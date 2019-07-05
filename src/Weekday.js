import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

class Weekday extends React.Component {
  render() {
    const currentDate = DateTime.fromISO(
      this.props.switcherReducer.currentDay.timestamp
    );

    return <span>{dayOfTheWeek}</span>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Weekday);
