import React from 'react';

import './scss/DayButton.scss';

const DayButton = props => {
  return (
    <div className="text-center">
      <div className="switcher" id={props.id} onClick={props.onClickValue}>
        <i
          className={`circular inverted teal large arrow 
          ${props.icon} icon`}
        />
        <div className="day-button-text">
          {props.text}
          <br />
          {props.requestedDay}
        </div>
      </div>
    </div>
  );
};

export default DayButton;
