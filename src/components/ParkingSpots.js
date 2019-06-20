import React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';

import Separator from './Separator';
import ActionModal from './ActionModal';
import './scss/ParkingSpots.scss';

class ParkingSpots extends React.Component {
  render() {
    return (
      <div className="spots">
        <div className="temporary-spots">
          <Separator spotsType="Tymczasowe:" />
          <Grid stackable centered relaxed columns={3}>
            <Grid.Column>
              <ActionModal car="1." />
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
