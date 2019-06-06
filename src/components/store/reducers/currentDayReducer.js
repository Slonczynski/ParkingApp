import { DateTime } from 'luxon';

// ------------------------------------
// Initial state
// ------------------------------------
const initialState = () => {
  const dt = DateTime.local().setZone('Europe/Warsaw');

  const nextDay = DateTime.fromISO(
    dt
      .plus({ days: 1 })
      .setZone('Europe/Warsaw')
      .toISODate()
  ).toFormat('dd-MM-yyyy');

  const previousDay = DateTime.fromISO(
    dt
      .minus({ days: 1 })
      .setZone('Europe/Warsaw')
      .toISODate()
  ).toFormat('dd-MM-yyyy');

  const currentDay = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');

  return { previousDay, currentDay, nextDay, initialDate: dt };
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
