import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import { Grid, Segment } from 'semantic-ui-react';

import './scss/Weekday.scss';

class Weekday extends React.Component {
  render() {
    const currentDate = DateTime.fromISO(
      this.props.switcherReducer.currentDay.timestamp
    ).weekday;
    const days = {
      1: 'Poniedziałek',
      2: 'Wtorek',
      3: 'Środa',
      4: 'Czwartek',
      5: 'Piątek',
      6: 'Sobota',
      7: 'Niedziela'
    };

    return (
      <div className="weekday-container">
        <Grid centered>
          <Segment
            compact
            size="large"
            textAlign="center"
            inverted
            color="blue"
          >
            <span className="weekday">{days[currentDate]}</span>
          </Segment>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Weekday);
