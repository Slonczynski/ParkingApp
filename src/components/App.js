import React from 'react';
import { connect } from 'react-redux';

import Tile from './Tile';
import Separator from './Separator';
import DayButton from './DayButton';
import './scss/App.scss';

class App extends React.Component {
  // Helper methods

  renderButtons() {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <DayButton
          arrowDirection="left"
          text="Poprzedni"
          requestedDay={Object.values(this.props.previousDay.date)}
          id="previous"
          onClickValue={() => {
            alert('works!');
          }}
        />
        <DayButton
          text="Aktywny"
          requestedDay={Object.values(this.props.currentDay.date)}
          id="active"
        />
        <DayButton
          arrowDirection="right"
          text="Następny"
          requestedDay={Object.values(this.props.nextDay.date)}
          id="next"
          onClickValue={() => {
            alert('works!');
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
  return {
    currentDay: state.currentDay,
    nextDay: state.nextDay,
    previousDay: state.previousDay
  };
};

export default connect(mapStateToProps)(App);
