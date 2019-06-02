import { DateTime } from 'luxon';

// ------------------------------------
// Initial state
// ------------------------------------
const initialState = () => {
  const dt = DateTime.local()
    .setZone('Europe/Warsaw')
    .toISODate();
  const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
  return { date: RequestedDate };
};

// ------------------------------------
// Reducer
// ------------------------------------
export default (state = initialState(), action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_DATE':
      return action.payload;
    default:
      return state;
  }
};
