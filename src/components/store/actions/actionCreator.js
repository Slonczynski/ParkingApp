import {
  PREVIOUS_TO_CURRENT_DAY,
  NEXT_TO_CURRENT_DAY,
  UPDATE_PREVIOUS_DAY,
  UPDATE_NEXT_DAY,
  FETCH_DATA,
  OCCUPY_SPOT
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
  prevTimestamp: prevTimestamp,
  currTimestamp: currTimestamp
});

export const nextToCurrentDay = (day1, day2, nextTimestamp, currTimestamp) => ({
  type: NEXT_TO_CURRENT_DAY,
  nextDay: day1,
  currentDay: day2,
  nextTimestamp: nextTimestamp,
  currTimestamp: currTimestamp
});

export const updatePreviousDay = value => ({
  type: UPDATE_PREVIOUS_DAY,
  value: value
});

export const updateNextDay = value => ({
  type: UPDATE_NEXT_DAY,
  value: value
});

export const fetchData = data => ({
  type: FETCH_DATA,
  data: data
  // Make async call to db
});

export const occupySpot = (data, { getFirebase, getFirestore }) => ({
  type: OCCUPY_SPOT,
  data: data
});
