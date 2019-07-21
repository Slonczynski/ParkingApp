import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import '../components/scss/SpotsCounter.scss';

class SpotsCounter extends React.Component {
  render() {
    //  Destructuring assignment
    const { occupiedSpotsNumber } = this.props;
    return (
      <Grid centered>
        <div className="segment">
          {occupiedSpotsNumber < 8 ? (
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
                  {8 - occupiedSpotsNumber}
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

export default SpotsCounter;
