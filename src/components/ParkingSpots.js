import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment } from 'semantic-ui-react';

import Separator from './Separator';
import Tile from './Tile';
import SpotsCounter from './SpotsCounter';
import './scss/ParkingSpots.scss';
import CalendarPicker from './CalendarPicker';

class ParkingSpots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isParkingAvaiable: true,
      occupiedSpots: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
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
        // TODO: Document is not empty
        const keyVal = {};
        for (const [key, val] of Object.entries(
          this.props.firestoreReducer.ordered['spots-collection']['0'][
            currentData
          ]
        )) {
          keyVal[key] = val;
        }
        if (prevState.occupiedSpots === this.state.occupiedSpots) {
          this.setState({
            occupiedSpots: keyVal
          });
        }
      }
    }
  }

  render() {
    return this.state.isParkingAvaiable === true ? (
      <div className="spots">
        <SpotsCounter />
        <CalendarPicker />
        <div className="temporary-spots">
          <Separator spotsType="Tymczasowe:" />
          <Grid stackable centered relaxed columns={4}>
            <Grid.Column>
              <Tile
                car="1."
                name={
                  this.state.occupiedSpots[1]
                    ? Object.values(this.state.occupiedSpots[1])
                    : null
                }
                className={
                  this.state.occupiedSpots[1]
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Tile
                car="2."
                name={
                  this.state.occupiedSpots[2]
                    ? Object.values(this.state.occupiedSpots[2])
                    : null
                }
                className={
                  this.state.occupiedSpots[2]
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Tile
                car="3."
                name={
                  this.state.occupiedSpots[3]
                    ? Object.values(this.state.occupiedSpots[3])
                    : null
                }
                className={
                  this.state.occupiedSpots[3]
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Tile
                car="4."
                name={
                  this.state.occupiedSpots[4]
                    ? Object.values(this.state.occupiedSpots[4])
                    : null
                }
                className={
                  this.state.occupiedSpots[4]
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
              <Tile
                car="5."
                name={
                  this.state.occupiedSpots[5]
                    ? Object.values(this.state.occupiedSpots[5])
                    : null
                }
                className={
                  this.state.occupiedSpots[5]
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Tile
                car="6."
                name={
                  this.state.occupiedSpots[6]
                    ? Object.values(this.state.occupiedSpots[6])
                    : null
                }
                className={
                  this.state.occupiedSpots[6]
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Tile
                car="7."
                name={
                  this.state.occupiedSpots[7]
                    ? Object.values(this.state.occupiedSpots[7])
                    : null
                }
                className={
                  this.state.occupiedSpots[7]
                    ? 'parking-place-occupied'
                    : 'parking-place-free'
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Tile
                car="8."
                name={
                  this.state.occupiedSpots[8]
                    ? Object.values(this.state.occupiedSpots[8])
                    : null
                }
                className={
                  this.state.occupiedSpots[8]
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
