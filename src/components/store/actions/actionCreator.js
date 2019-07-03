import {
  PREVIOUS_TO_CURRENT_DAY,
  NEXT_TO_CURRENT_DAY,
  UPDATE_PREVIOUS_DAY,
  UPDATE_NEXT_DAY
} from './actionTypes';

export const previousToCurrentDay = (
  day1,
  day2,
  prevTimestamp,
  currTimestamp
) => ({
  type: PREVIOUS_TO_CURRENT_DAY,
  previousDay: day1,
  currentDay: day2,
  prevTimestamp,
  currTimestamp
});

export const nextToCurrentDay = (day1, day2, nextTimestamp, currTimestamp) => ({
  type: NEXT_TO_CURRENT_DAY,
  nextDay: day1,
  currentDay: day2,
  nextTimestamp,
  currTimestamp
});

export const updatePreviousDay = value => ({
  type: UPDATE_PREVIOUS_DAY,
  value
});

export const updateNextDay = value => ({
  type: UPDATE_NEXT_DAY,
  value
});
