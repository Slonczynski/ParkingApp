import { UPDATE_DATE } from './actionTypes';

export const updateDate = day => ({
  type: 'UPDATE_DATE',
  currentDay: day
});
