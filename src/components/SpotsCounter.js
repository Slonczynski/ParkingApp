import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

class SpotsCounter extends React.Component {
  getValue() {
    const currentDay = DateTime.fromISO(
      this.props.switcherReducer.currentDay.timestamp
    );

    const Valye = () => {
      return Object.values(this.props.firestoreReducer.ordered.spots);
    };
  }

  render() {
    return {};
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SpotsCounter);
