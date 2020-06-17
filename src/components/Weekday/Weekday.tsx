import React from 'react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

import { AppState } from '../store/reducers/mainReducer';

import './Weekday.scss';

type WeekdayProps = {
  requestedDay?: string;
  switcherReducer: object;
}

const Weekday = ({requestedDay}: WeekdayProps) => {
  const switcherReducer = useSelector((state:AppState) => state.switcherReducer);
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
  days: PropTypes.string,
  requestedDay: PropTypes.string,
  switcherReducer: PropTypes.object.isRequired,
}

export default Weekday;
