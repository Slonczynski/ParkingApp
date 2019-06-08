import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DateTime } from 'luxon';
import {
  previousToCurrentDay,
  nextToCurrentDay,
  updatePreviousDay
} from './store/actions/actionCreator';
import Tile from './Tile';
import Separator from './Separator';
import DayButton from './DayButton';
import './scss/App.scss';

class App extends React.Component {
  // Helper methods

  componentDidUpdate() {
    console.log(this.props.previousDay.count);
    if (this.props.previousDay.timestamp !== this.props.currentDay.timestamp) {
      this.props.updatePreviousDay(
        console.log(
          this.props.previousDay.timestamp
            .minus({ days: this.props.previousDay.count })
            .setZone('Europe/Warsaw')
            .toFormat('dd-MM-yyyy')
        )
      );
    }
  }

  renderButtons() {
    console.log(this.props);
    return (
      <div className="d-flex justify-content-between align-items-center">
        <DayButton
          arrowDirection="left"
          text="Poprzedni"
          requestedDay={DateTime.fromISO(
            this.props.previousDay.timestamp
          ).toFormat('dd-MM-yyyy')}
          id="previous"
          onClickValue={() => {
            this.props.previousToCurrentDay(
              this.props.previousDay.value,
              this.props.currentDay.value,
              this.props.previousDay.count,
              this.props.previousDay.timestamp
            );
          }}
        />
        <DayButton
          text="Aktywny"
          requestedDay={DateTime.fromISO(
            this.props.currentDay.timestamp
          ).toFormat('dd-MM-yyyy')}
          id="active"
        />
        <DayButton
          arrowDirection="right"
          text="Następny"
          requestedDay={DateTime.fromISO(this.props.nextDay.timestamp).toFormat(
            'dd-MM-yyyy'
          )}
          id="next"
          onClickValue={() => {
            this.props.nextToCurrentDay(
              this.props.nextDay.value,
              this.props.currentDay.value,
              this.props.nextDay.count
            );
          }}
        />
      </div>
    );
  }

  renderTiles() {
    return (
      <div className="spots">
        <div className="temporary-spots">
          <Separator spotsType="Miejsca tymczasowe:" />
          <div className="container-fluid">
            <div className="row justify-content-center">
              <Tile car="1." />
              <Tile car="2." />
              <Tile car="3." />
            </div>
          </div>
        </div>
        <div className="permanent-spots">
          <Separator spotsType="Miejsca stałe:" />
          <div className="container-fluid">
            <div className="row justify-content-center">
              <Tile car="4." />
              <Tile car="5." />
              <Tile car="6." />
              <Tile car="7." />
              <Tile car="8." />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderButtons()}
        {this.renderTiles()}
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
      updatePreviousDay
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
