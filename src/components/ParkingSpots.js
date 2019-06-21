import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';

import Separator from './Separator';
import ActionModal from './ActionModal';
import './scss/ParkingSpots.scss';

class ParkingSpots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      freeSpotIds: [],
      occupiedSpotIds: []
    };
  }
  componentDidUpdate() {
    const currentData = DateTime.fromISO(
      this.props.switcherReducer.currentDay.timestamp
    ).toFormat('dd-MM-yyyy');

    if (
      this.props.firestoreReducer.ordered['spots-collection']['0'][
        currentData
      ] == null &&
      this.props.firestoreReducer.ordered['spots-collection']['0'][
        currentData
      ] === undefined
    ) {
      if (this.state.freeSpotIds !== ['1', '2', '3', '4', '5', '6', '7', '8'])
        return this.setState({
          ...this.state,
          freeSpotIds: ['1', '2', '3', '4', '5', '6', '7', '8']
        });
    }
  }

  render() {
    return (
      <div className="spots">
        <div className="temporary-spots">
          <Separator spotsType="Tymczasowe:" />
          <Grid stackable centered relaxed columns={3}>
            <Grid.Column>
              <ActionModal
                car="1."
                className={
                  this.state.freeSpotIds.includes('1')
                    ? 'parking-place-free'
                    : 'parking-place-occupied'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <ActionModal car="2." />
            </Grid.Column>
            <Grid.Column>
              <ActionModal car="3." />
            </Grid.Column>
          </Grid>
        </div>
        <div className="permanent-spots">
          <Separator spotsType="Stałe:" />
          <Grid stackable centered relaxed columns={5}>
            <Grid.Column>
              <ActionModal car="4." />
            </Grid.Column>
            <Grid.Column>
              <ActionModal car="5." />
            </Grid.Column>
            <Grid.Column>
              <ActionModal car="6." />
            </Grid.Column>
            <Grid.Column>
              <ActionModal car="7." />
            </Grid.Column>
            <Grid.Column>
              <ActionModal car="8." />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ParkingSpots);
