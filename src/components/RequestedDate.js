import React from 'react';
import { DateTime } from 'luxon';

const RequestedDate = props => {
  if (props.day === 'yesterday') {
    const dt = DateTime.local()
      .minus({ days: 1 })
      .setZone('Europe/Warsaw')
      .toISODate();
    const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
    return <div className="past-date">{RequestedDate}</div>;
  }
  if (props.day === 'today') {
    const dt = DateTime.local()
      .setZone('Europe/Warsaw')
      .toISODate();
    const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
    return <div className="current-date">{RequestedDate}</div>;
  }
  if (props.day === 'tomorrow') {
    const dt = DateTime.local()
      .plus({ days: 1 })
      .setZone('Europe/Warsaw')
      .toISODate();
    const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
    return <div className="next-date">{RequestedDate}</div>;
  }
};

export default RequestedDate;
