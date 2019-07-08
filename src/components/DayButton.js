import React from 'react';
import { Segment } from 'semantic-ui-react';

import './scss/DayButton.scss';

const DayButton = props => {
  return props.weekday ? (
    <div className="text-center">
      <div className="switcher" id={props.id} onClick={props.onClickValue}>
        <i
          className={`circular inverted teal large arrow 
          ${props.icon} icon`}
        />
        <Segment compact inverted size="small" color="blue">
          <div className="day-button-text">
            {props.text}
            {props.weekday}
          </div>
        </Segment>
      </div>
    </div>
  ) : (
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
