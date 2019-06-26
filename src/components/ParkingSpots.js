import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment } from 'semantic-ui-react';

import Separator from './Separator';
import ActionModal from './ActionModal';
import './scss/ParkingSpots.scss';

class ParkingSpots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isParkingAvaiable: true,
      occupiedSpots: {}
    };
  }

  componentDidUpdate() {
    const currentData = DateTime.fromISO(
      this.props.switcherReducer.currentDay.timestamp
    ).toFormat('dd-MM-yyyy');

    // Check if database contains object named as currentData.
    // If not inform user that it's not possible to book parking spot.
    if (
      this.props.firestoreReducer.ordered['spots-collection']['0'][
        currentData
      ] == null
    ) {
      if (this.state.isParkingAvaiable !== false) {
        this.setState({
          isParkingAvaiable: false
        });
      }
    } else {
      // Check if state is correct
      if (this.state.isParkingAvaiable !== true) {
        this.setState({
          isParkingAvaiable: true
        });
      }
      if (
        // Check if object is empty
        Object.entries(
          this.props.firestoreReducer.ordered['spots-collection']['0'][
            currentData
          ]
        ).length === 0 &&
        this.props.firestoreReducer.ordered['spots-collection']['0'][
          currentData
        ].constructor === Object &&
        Object.entries(this.state.occupiedSpots).length !== 0 &&
        this.state.occupiedSpots.constructor !== Object
      ) {
        this.setState({
          occupiedSpots: {}
        });
      } else {
        console.log('dupa');

        // TODO: Document is not empty
        for (
          let i = 0;
          i <
          Object.keys(
            this.props.firestoreReducer.ordered['spots-collection']['0'][
              currentData
            ]
          ).length;
          i++
        ) {
          let spotId = Object.fromEntries(
            this.props.firestoreReducer.ordered['spots-collection']['0'][
              currentData
            ]
          )[i];
          console.log(spotId);
        }
      }
    }
  }

  render() {
    return this.state.isParkingAvaiable === true ? (
      <div className="spots">
        <div className="temporary-spots">
          <Separator spotsType="Tymczasowe:" />
          <Grid stackable centered relaxed columns={4}>
            <Grid.Column>
              <ActionModal
                car="1."
                name="Konrad"
                className={
                  this.state.occupiedSpots[1] === true
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <ActionModal
                car="2."
                className={
                  this.state.occupiedSpots[2] === true
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <ActionModal
                car="3."
                className={
                  this.state.occupiedSpots[3] === true
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <ActionModal
                car="4."
                className={
                  this.state.occupiedSpots[4] === true
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
          </Grid>
        </div>
        <div className="permanent-spots">
          <Separator spotsType="Stałe:" />
          <Grid stackable centered relaxed columns={4}>
            <Grid.Column>
              <ActionModal
                car="5."
                className={
                  this.state.occupiedSpots[5] === true
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <ActionModal
                car="6."
                className={
                  this.state.occupiedSpots[6] === true
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <ActionModal
                car="7."
                className={
                  this.state.occupiedSpots[7] === true
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <ActionModal
                car="8."
                className={
                  this.state.occupiedSpots[8] === true
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    ) : (
      <Grid centered>
        <div className="segment">
          <Segment
            compact
            padded
            size="large"
            textAlign="center"
            inverted
            color="red"
          >
            <span>Parking niedostępny</span>
          </Segment>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ParkingSpots);
