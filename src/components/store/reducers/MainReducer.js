import { combineReducers } from 'redux';
import switcherReducer from './switcherReducer';
import databaseReducer from './databaseReducer';

export default combineReducers({
  switcherReducer,
  databaseReducer
});
