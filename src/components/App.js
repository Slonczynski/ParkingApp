import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  previousToCurrentDay,
  nextToCurrentDay
} from './store/actions/actionCreator';
import Tile from './Tile';
import Separator from './Separator';
import DayButton from './DayButton';
import './scss/App.scss';

class App extends React.Component {
  // Helper methods

  renderButtons() {
    console.log(this.props);
    return (
      <div className="d-flex justify-content-between align-items-center">
        <DayButton
          arrowDirection="left"
          text="Poprzedni"
          requestedDay={Object.values(this.props.previousDay.value)}
          id="previous"
          onClickValue={() => {
            this.props.previousToCurrentDay(
              this.props.previousDay.value,
              this.props.currentDay.value
            );
          }}
        />
        <DayButton
          text="Aktywny"
          requestedDay={Object.values(this.props.currentDay.value)}
          id="active"
        />
        <DayButton
          arrowDirection="right"
          text="Następny"
          requestedDay={Object.values(this.props.nextDay.value)}
          id="next"
          onClickValue={() => {
            this.props.update;
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
      nextToCurrentDay
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
