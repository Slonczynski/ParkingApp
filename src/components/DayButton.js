import React from 'react';

// const dayConfig = {
//   yesterday: {
//     arrowDirection: 'left',
//     text: 'Wczoraj'
//   },
//   today: {
//     text: 'Dzisiaj'
//   },
//   tomorrow: {
//     arrowDirection: 'right',
//     text: 'Jutro'
//   }
// };

const DayButton = (props, arrowDirection, text) => {
  // const { arrowDirection, text } = dayConfig[props.day];
  return (
    <div className="text-center">
      <div className="switcher">
        <i
          className={`circular inverted teal large arrow ${
            props.arrowDirection
          } icon`}
        />
        <div className={props.day}>
          {props.text}
          <br />
          {props.requestedDay}
        </div>
      </div>
    </div>
  );
};

export default DayButton;
