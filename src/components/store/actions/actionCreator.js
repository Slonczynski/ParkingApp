import {
  PREVIOUS_TO_CURRENT_DAY,
  NEXT_TO_CURRENT_DAY,
  UPDATE_PREVIOUS_DAY,
  UPDATE_NEXT_DAY
} from './actionTypes';

export const previousToCurrentDay = (day1, day2, clicks, timestamp) => ({
  type: 'PREVIOUS_TO_CURRENT_DAY',
  previousDay: day1,
  currentDay: day2,
  count: clicks,
  timestamp: timestamp
});

export const nextToCurrentDay = (day1, day2, clicks) => ({
  type: 'NEXT_TO_CURRENT_DAY',
  nextDay: day1,
  currentDay: day2,
  count: clicks
});

export const updatePreviousDay = value => ({
  type: 'UPDATE_PREVIOUS_DAY',
  value: value
});

export const updateNextDay = value => ({
  type: 'UPDATE_NEXT_DAY',
  value: value
});
