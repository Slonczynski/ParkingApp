import React from 'react';
import { connect } from 'react-redux';

const dayConfig = {
  yesterday: {
    arrowDirection: 'left',
    text: 'Wczoraj'
  },
  today: {
    text: 'Dzisiaj'
  },
  tomorrow: {
    arrowDirection: 'right',
    text: 'Jutro'
  }
};

const DayButton = props => {
  const { arrowDirection, text } = dayConfig[props.day];
  return (
    <div className="text-center">
      <div className="switcher">
        <i
          className={`circular inverted teal large arrow ${arrowDirection} icon`}
        />
        <div className={props.day}>
          {text}
          <br />
          {console.log(props)}
          {Object.values(props.currentDay)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentDay: state.currentDay,
    nextDay: state.nextDay,
    previousDay: state.previousDay
  };
};

export default connect(mapStateToProps)(DayButton);
