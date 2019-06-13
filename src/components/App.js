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
import { Grid, Image } from 'semantic-ui-react';

import Tile from './Tile';
import Separator from './Separator';
import DayButton from './DayButton';
import TileWithModal from './TileWithModal';
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
          <Grid stackable centered relaxed columns={3}>
            <Grid.Column>
              <TileWithModal car="1." />
            </Grid.Column>
            <Grid.Column>
              <TileWithModal car="2." />
            </Grid.Column>
            <Grid.Column>
              <TileWithModal car="3." />
            </Grid.Column>
          </Grid>
        </div>
        <div className="permanent-spots">
          <Separator spotsType="Miejsca stałe:" />
          <Grid stackable centered relaxed columns={5}>
            <Grid.Column>
              <TileWithModal car="4." />
            </Grid.Column>
            <Grid.Column>
              <TileWithModal car="5." />
            </Grid.Column>
            <Grid.Column>
              <TileWithModal car="6." />
            </Grid.Column>
            <Grid.Column>
              <TileWithModal car="7." />
            </Grid.Column>
            <Grid.Column>
              <TileWithModal car="8." />
            </Grid.Column>
          </Grid>
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
