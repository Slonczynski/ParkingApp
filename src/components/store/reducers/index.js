import { combineReducers } from 'redux';

import previousDayReducer from './previousDayReducer';
import currentDayReducer from './currentDayReducer';
import nextDayReducer from './nextDayReducer';

export default combineReducers({
  previousDate: previousDayReducer,
  currentDate: currentDayReducer,
  nextDate: nextDayReducer
});
