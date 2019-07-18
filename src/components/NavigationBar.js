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

import './scss/App.scss';

import DayButton from './DayButton';
import Weekday from './Weekday';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-between align-items-start">
        <DayButton
          icon="left"
          text="Poprzedni"
          requestedDay={DateTime.fromISO(
            this.props.switcherReducer.previousDay.timestamp
          ).toFormat('dd-MM-yyyy')}
          id="previous"
          onClickValue={() => {
            this.props.previousToCurrentDay(
              this.props.switcherReducer.previousDay.value,
              this.props.switcherReducer.currentDay.value,
              this.props.switcherReducer.previousDay.timestamp,
              this.props.switcherReducer.currentDay.timestamp
            );

            if (
              this.props.switcherReducer.previousDay.timestamp !==
              this.props.switcherReducer.currentDay.timestamp
            ) {
              this.props.updatePreviousDay(
                this.props.switcherReducer.previousDay.timestamp
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
            <Weekday
              requestedDay={DateTime.fromISO(
                this.props.switcherReducer.currentDay.timestamp
              ).toFormat('dd-MM-yyyy')}
            />
          }
        />

        <DayButton
          icon="right"
          text="Następny"
          requestedDay={DateTime.fromISO(
            this.props.switcherReducer.nextDay.timestamp
          ).toFormat('dd-MM-yyyy')}
          id="next"
          onClickValue={() => {
            this.props.nextToCurrentDay(
              this.props.switcherReducer.nextDay.value,
              this.props.switcherReducer.currentDay.value,
              this.props.switcherReducer.nextDay.timestamp,
              this.props.switcherReducer.currentDay.timestamp
            );
            if (
              this.props.switcherReducer.nextDay.timestamp !==
              this.props.switcherReducer.currentDay.timestamp
            ) {
              this.props.updateNextDay(
                this.props.switcherReducer.nextDay.timestamp
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
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
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
