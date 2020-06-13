import {
  PREVIOUS_TO_CURRENT_DAY,
  NEXT_TO_CURRENT_DAY,
  UPDATE_PREVIOUS_DAY,
  UPDATE_NEXT_DAY,
  UPDATE_CURRENT_DAY
} from './actionTypes';

export const previousToCurrentDay = (
  day1: any,
  day2: any,
  prevTimestamp: any,
  currTimestamp: any
) => ({
  type: PREVIOUS_TO_CURRENT_DAY,
  previousDay: day1,
  currentDay: day2,
  prevTimestamp,
  currTimestamp
});

export const nextToCurrentDay = (day1: any, day2: any, nextTimestamp: any, currTimestamp: any) => ({
  type: NEXT_TO_CURRENT_DAY,
  nextDay: day1,
  currentDay: day2,
  nextTimestamp,
  currTimestamp
});

export const updatePreviousDay = (value: any) => ({
  type: UPDATE_PREVIOUS_DAY,
  value
});

export const updateNextDay = (value: any) => ({
  type: UPDATE_NEXT_DAY,
  value
});

export const updateCurrentDay = (value: any) => ({
  type: UPDATE_CURRENT_DAY,
  value
});
