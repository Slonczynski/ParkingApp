import { combineReducers } from 'redux';

import { DateTime } from 'luxon';

// ------------------------------------
// Initial state
// ------------------------------------
const initialState = () => {
  const dt = DateTime.local().setZone('Europe/Warsaw');
  const dtPlus = dt.plus({ days: 1 }).setZone('Europe/Warsaw');
  const dtMinus = dt.minus({ days: 1 }).setZone('Europe/Warsaw');

  const nextDay = DateTime.fromISO(dtPlus.toISODate()).toFormat('dd-MM-yyyy');
  const previousDay = DateTime.fromISO(dtMinus.toISODate()).toFormat(
    'dd-MM-yyyy'
  );
  const currentDay = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');

  return {
    currentDay: {
      value: currentDay,
      timestamp: dt
    },
    nextDay: {
      value: nextDay,
      timestamp: dtPlus
    },
    previousDay: {
      value: previousDay,
      timestamp: dtMinus
    }
  };
};

// ------------------------------------
// Reducer
// ------------------------------------
export default (state = initialState(), action) => {
  switch (action.type) {
    case 'PREVIOUS_TO_CURRENT_DAY':
      return {
        ...state,
        nextDay: {
          ...state.nextDay,
          value: action.currentDay
        },
        currentDay: {
          ...state.currentDay,
          value: action.previousDay
        }
      };
    case 'NEXT_TO_CURRENT_DAY':
      return {
        ...state,
        previousDay: {
          ...state.previousDay,
          value: action.currentDay
        },
        currentDay: {
          ...state.currentDay,
          value: action.nextDay
        }
      };
    default:
      return state;
  }
};
