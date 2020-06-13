import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

import './scss/Weekday.scss';

type Props = {
  days?: any;
  requestedDay?: any;
  switcherReducer?: any;
}

class Weekday extends React.Component<Props> {
  render() {
    const currentDate: any = DateTime.fromISO(
      this.props.switcherReducer.currentDay.timestamp
    ).weekday;

    const days: any = {
      1: 'Poniedziałek',
      2: 'Wtorek',
      3: 'Środa',
      4: 'Czwartek',
      5: 'Piątek',
      6: 'Sobota',
      7: 'Niedziela'
    };

    return (
      <div className="weekday-container">
        <span>{this.props.requestedDay}</span>
        <br />
        <span className="weekday">{days[currentDate]}</span>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(Weekday);
