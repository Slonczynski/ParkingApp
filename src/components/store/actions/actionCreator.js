import {
  PREVIOUS_TO_CURRENT_DAY,
  NEXT_TO_CURRENT_DAY,
  UPDATE_PREVIOUS_DAY,
  UPDATE_NEXT_DAY,
  SEND_DATA,
  SEND_DATA_ERROR
} from './actionTypes';

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../../config/fbConfig';
import firebase from 'firebase/app';
import 'firebase/firestore';

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
firebase.firestore();
// const firestore = getFirestore(fbConfig);
export const sendData = (data, firestore) => {
  return (data, firestore, { getFirebase, getFirestore }) => {
    firestore
      .collection('spots')
      .add({
        ...data,
        data: '14-06-2019',
        holder: 'Szymon',
        isEmpty: false,
        spotId: 4
      })
      .then(() => ({
        type: 'SEND_DATA',
        data: data
      }))
      .catch(err => ({ type: 'SEND_DATA_ERROR', err }));
  };
};

// export const fetchData = data => ({
//   type: FETCH_DATA,
//   data: data
//   Make async call to db
// });
