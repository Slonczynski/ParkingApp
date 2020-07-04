import React from 'react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

import { RootState } from '../store/reducers/mainReducer';

import './Weekday.scss';

type WeekdayProps = {
  requestedDay: string;
  switcherReducer: string;
}

const Weekday = ({requestedDay, switcherReducer}: WeekdayProps) => {
  const currentDate: any = DateTime.fromISO(switcherReducer.currentDay.timestamp).weekday;
  const weekdays: any = {
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
      <span>{requestedDay}</span>
      <br />
      <span className="weekday">{weekdays[currentDate]}</span>
    </div>
  );
}

Weekday.propTypes = {
  requestedDay: PropTypes.string,
}

export default Weekday;
