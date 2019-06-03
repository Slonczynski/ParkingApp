import React from 'react';

const DayButton = props => {
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
