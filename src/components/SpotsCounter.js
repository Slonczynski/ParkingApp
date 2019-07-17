import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

import '../components/scss/SpotsCounter.scss';

class SpotsCounter extends React.Component {
  render() {
    return (
      <Grid centered>
        <div className="segment">
          {this.props.occupiedSpotsNumber < 8 ? (
            <Segment
              compact
              padded
              size="large"
              textAlign="center"
              inverted
              color="green"
            >
              <div className="free-spots">
                <span className="free-spots-text">
                  Wolnych miejsc: <br />
                </span>
                <span className="free-spots-number">
                  {8 - this.props.occupiedSpotsNumber}
                </span>
              </div>
            </Segment>
          ) : (
            <Segment
              compact
              padded
              size="large"
              textAlign="center"
              inverted
              color="red"
            >
              <div className="no-free-spots">
                <span className="no-free-spots-text">Brak wolnych miejsc</span>
              </div>
            </Segment>
          )}
        </div>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SpotsCounter);
