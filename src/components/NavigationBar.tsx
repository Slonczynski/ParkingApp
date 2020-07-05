import React from 'react';
import { DateTime } from 'luxon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  previousToCurrentDay,
  nextToCurrentDay,
  updatePreviousDay,
  updateNextDay
} from './store/actions/actionCreator';

import DayButton from './DayButton';
import Weekday from './Weekday';

import './scss/App.scss';

type Props = {
  switcherReducer?: any;
  previousToCurrentDay?: any;
  updatePreviousDay?: any;
  nextToCurrentDay?: any;
  updateNextDay?: any;
}

class NavigationBar extends React.Component<Props> {
  render() {
    const {
      switcherReducer,
      previousToCurrentDay,
      updatePreviousDay,
      nextToCurrentDay,
      updateNextDay
    } = this.props;

    const weekdayProps = {
      requestedDay: DateTime.fromISO(switcherReducer.currentDay.timestamp).toFormat('dd-MM-yyyy')
    }

    return (
      <div className="d-flex justify-content-between align-items-start">
        <DayButton
          icon="left"
          text="Poprzedni"
          requestedDay={DateTime.fromISO(
            switcherReducer.previousDay.timestamp
          ).toFormat('dd-MM-yyyy')}
          id="previous"
          onClickValue={() => {
            previousToCurrentDay(
              switcherReducer.currentDay.value,
              switcherReducer.previousDay.value,
              switcherReducer.previousDay.timestamp,
              switcherReducer.currentDay.timestamp
            );

            if (
              switcherReducer.previousDay.timestamp !==
              switcherReducer.currentDay.timestamp
            ) {
              updatePreviousDay(
                switcherReducer.previousDay.timestamp
                  .minus({ days: 1 })
                  .setZone('Europe/Warsaw')
              );
            }
          }}
        />
        <DayButton
          icon="calendar alternate"
          id="active"
          weekday={
            <Weekday {...weekdayProps} />
          }
        />

        <DayButton
          icon="right"
          text="Następny"
          requestedDay={DateTime.fromISO(
            switcherReducer.nextDay.timestamp
          ).toFormat('dd-MM-yyyy')}
          id="next"
          onClickValue={() => {
            nextToCurrentDay(
              switcherReducer.nextDay.value,
              switcherReducer.currentDay.value,
              switcherReducer.nextDay.timestamp,
              switcherReducer.currentDay.timestamp
            );
            if (
              switcherReducer.nextDay.timestamp !==
              switcherReducer.currentDay.timestamp
            ) {
              updateNextDay(
                switcherReducer.nextDay.timestamp
                  .plus({ days: 1 })
                  .setZone('Europe/Warsaw')
              );
            }
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      previousToCurrentDay,
      nextToCurrentDay,
      updatePreviousDay,
      updateNextDay
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
