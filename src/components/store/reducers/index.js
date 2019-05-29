import React from 'react';
import { combineReducers } from 'redux';
// import RequestedDate from '../../RequestedDate';
import { DateTime } from 'luxon';

const RequestedDate = () => {
  const dt = DateTime.local()
    .setZone('Europe/Warsaw')
    .toISODate();
  const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
  return RequestedDate;
};
const getDate = () => {
  return { date: RequestedDate() };
};

export default combineReducers({ currentDate: getDate });
