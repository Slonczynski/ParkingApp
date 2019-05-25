import React from 'react';
import { combineReducers } from 'redux';
import RequestedDate from '../../RequestedDate';

const getDate = () => {
  return [{ date: '' }];
};

export default combineReducers({ currentDate: getDate });
