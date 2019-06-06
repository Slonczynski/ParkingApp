import { combineReducers } from 'redux';

import currentDayReducer from './currentDayReducer';

export default combineReducers({
  dates: currentDayReducer
});
