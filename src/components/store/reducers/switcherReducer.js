import { DateTime } from 'luxon';

// ------------------------------------
// Initial state
// ------------------------------------
const initialState = () => {
  const dt = DateTime.local().setZone('Europe/Warsaw');
  const dtPlus = dt.plus({ days: 1 }).setZone('Europe/Warsaw');
  const dtMinus = dt.minus({ days: 1 }).setZone('Europe/Warsaw');

  return {
    currentDay: {
      timestamp: dt
    },
    nextDay: {
      timestamp: dtPlus
    },
    previousDay: {
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
          timestamp: action.currTimestamp
        },
        currentDay: {
          ...state.currentDay,
          timestamp: action.prevTimestamp
        },
        previousDay: {
          ...state.previousDay
        }
      };
    case 'NEXT_TO_CURRENT_DAY':
      return {
        ...state,
        previousDay: {
          ...state.previousDay,
          timestamp: action.currTimestamp
        },
        currentDay: {
          ...state.currentDay,
          timestamp: action.nextTimestamp
        },
        nextDay: {
          ...state.nextDay
        }
      };
    case 'UPDATE_PREVIOUS_DAY':
      return {
        ...state,
        previousDay: {
          ...state.previousDay,
          timestamp: action.value
        }
      };
    case 'UPDATE_NEXT_DAY':
      return {
        ...state,
        nextDay: {
          ...state.nextDay,
          timestamp: action.value
        }
      };
    case 'UPDATE_CURRENT_DAY':
      return {
        ...state,
        currentDay: {
          ...state.currentDay,
          timestamp: action.value
        }
      };
    default:
      return state;
  }
};
