import React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { bindActionCreators } from 'redux';
import { DateTime } from 'luxon';
import {
  previousToCurrentDay,
  nextToCurrentDay,
  updatePreviousDay,
  updateNextDay,
  fetchData
} from './store/actions/actionCreator';

import Tile from './Tile';
import Separator from './Separator';
import DayButton from './DayButton';
import ActionModal from './ActionModal';
import './scss/App.scss';

class App extends React.Component {
  // Helper methods
  componentWillMount() {
    this.props.fetchData();
  }

  renderButtons() {
    console.log(this.props);
    return (
      <div className="d-flex justify-content-between align-items-center">
        <DayButton
          arrowDirection="left"
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
          text="Aktywny"
          requestedDay={DateTime.fromISO(
            this.props.switcherReducer.currentDay.timestamp
          ).toFormat('dd-MM-yyyy')}
          id="active"
        />
        <DayButton
          arrowDirection="right"
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

  renderTiles() {
    return (
      <div className="spots">
        <div className="temporary-spots">
          <Separator spotsType="Miejsca tymczasowe:" />
          <div className="container-fluid">
            <div className="row justify-content-center">
              <Tile car="1." onClickValue={() => <ActionModal />} />
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
      updatePreviousDay,
      updateNextDay,
      fetchData
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
