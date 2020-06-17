import { combineReducers } from 'redux';
import switcherReducer from './switcherReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  firestoreReducer: firestoreReducer,
  switcherReducer: switcherReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
