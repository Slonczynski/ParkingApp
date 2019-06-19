import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import { Grid, Segment } from 'semantic-ui-react';

import '../components/scss/SpotsCounter.scss';

class SpotsCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occupiedSpotsNumber: ''
    };
  }
  componentDidUpdate() {
    const currentData = DateTime.fromISO(
      this.props.switcherReducer.currentDay.timestamp
    ).toFormat('dd-MM-yyyy');

    if (
      this.props.firestoreReducer.ordered['spots-collection']['0'][
        currentData
      ] !== undefined ||
      null
    ) {
      if (
        this.state.occupiedSpotsNumber !==
        Object.keys(
          this.props.firestoreReducer.ordered['spots-collection']['0'][
            currentData
          ]
        ).length
      ) {
        this.setState({
          occupiedSpotsNumber: Object.keys(
            this.props.firestoreReducer.ordered['spots-collection']['0'][
              currentData
            ]
          ).length
        });
      }
    }
    // TODO:
    // return else with div => all spots avaiable!
  }

  freeSpots() {
    return (
      <Grid centered>
        <div className="segment">
          {this.state.occupiedSpotsNumber < 8 ? (
            <Segment compact padded textAlign="center" inverted color="green">
              <div className="free-spots">
                <span>
                  Wolnych miejsc: <br />
                  <span className="free-spots-number">
                    {8 - this.state.occupiedSpotsNumber}
                  </span>
                </span>
              </div>
            </Segment>
          ) : (
            <Segment compact padded textAlign="center" inverted color="red">
              <div className="no-free-spots">Brak wolnych miejsc</div>
            </Segment>
          )}
        </div>
      </Grid>
    );
  }

  render() {
    console.log(this.state.occupiedSpotsNumber);
    return this.freeSpots();
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SpotsCounter);
