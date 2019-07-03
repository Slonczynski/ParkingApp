import { combineReducers } from 'redux';
import switcherReducer from './switcherReducer';
import databaseReducer from './databaseReducer';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
  firestoreReducer,
  switcherReducer,
  databaseReducer
});
