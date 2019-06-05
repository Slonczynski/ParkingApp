// import React from 'react';
// import { connect } from 'react-redux';
// import { DateTime } from 'luxon';

// const RequestedDate = () => {
//   if (props.day === 'yesterday') {
//     const dt = DateTime.local()
//       .minus({ days: 1 })
//       .setZone('Europe/Warsaw')
//       .toISODate();
//     const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
//     return RequestedDate;
//   }

//   const dt = DateTime.local()
//     .setZone('Europe/Warsaw')
//     .toISODate();
//   const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
//   return RequestedDate;
//   // }
//   // if (props.day === 'tomorrow') {
//   //   const dt = DateTime.local()
//   //     .plus({ days: 1 })
//   //     .setZone('Europe/Warsaw')
//   //     .toISODate();
//   //   const RequestedDate = DateTime.fromISO(dt).toFormat('dd-MM-yyyy');
//   //   return RequestedDate;
//   // }
// };

// const mapStateToProps = state => {
//   console.log(state);
//   return state;
// };
// export default connect(mapStateToProps)(RequestedDate);

//
// Using math with luxon
//

// const RequestedDate = () => {
//   const dt = DateTime.local().setZone('Europe/Warsaw');

//   const abc = dt
//     .minus({ days: 1 })
//     .setZone('Europe/Warsaw')
//     .toISODate();
//   const RequestedDate = console.log(
//     DateTime.fromISO(abc).toFormat('dd-MM-yyyy')
//   );
//   return RequestedDate;
// };

// export default RequestedDate;
