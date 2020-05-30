import { combineReducers } from 'redux';
import switcherReducer from './switcherReducer';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
  firestoreReducer,
  switcherReducer
});
