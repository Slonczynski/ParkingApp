import { combineReducers } from 'redux';

import previousDateReducer from './previousDateReducer';
import currentDateReducer from './currentDateReducer';
import nextDateReducer from './nextDateReducer';

export default combineReducers({
  previousDate: previousDateReducer,
  currentDate: currentDateReducer,
  nextDate: nextDateReducer
});
