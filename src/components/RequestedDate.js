import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

class RequestedDate extends React.Component {
  RequestedDate = () => {
    // if (props.day === 'yesterday') {
    //   const dt = DateTime.local()
    //     .minus({ days: 1 })
    //     .setZone('Europe/Warsaw')
    //     .toISODate();
    //   const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
    //   return RequestedDate;
    // }

    const dt = DateTime.local()
      .setZone('Europe/Warsaw')
      .toISODate();
    const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
    return RequestedDate;
    // }
    // if (props.day === 'tomorrow') {
    //   const dt = DateTime.local()
    //     .plus({ days: 1 })
    //     .setZone('Europe/Warsaw')
    //     .toISODate();
    //   const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
    //   return RequestedDate;
    // }
  };
  render() {
    return RequestedDate;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps)(RequestedDate);
