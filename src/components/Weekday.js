import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import { Segment } from 'semantic-ui-react';

class Weekday extends React.Component {
  render() {
    const currentDate = DateTime.fromISO(
      this.props.switcherReducer.currentDay.timestamp
    );

    return (
      <Segment
        compact
        padded
        size="large"
        textAlign="center"
        inverted
        color="green"
      >
        <span>{dayOfTheWeek}</span>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Weekday);
