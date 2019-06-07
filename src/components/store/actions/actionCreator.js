import { PREVIOUS_TO_CURRENT_DAY, NEXT_TO_CURRENT_DAY } from './actionTypes';

export const previousToCurrentDay = (day1, day2, clicks) => ({
  type: 'PREVIOUS_TO_CURRENT_DAY',
  previousDay: day1,
  currentDay: day2,
  count: clicks
});

export const nextToCurrentDay = (day1, day2) => ({
  type: 'NEXT_TO_CURRENT_DAY',
  nextDay: day1,
  currentDay: day2
});
