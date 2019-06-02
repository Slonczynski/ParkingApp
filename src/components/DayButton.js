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
          {Object.values(props.currentDate)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentDate: state.currentDate };
};

export default connect(mapStateToProps)(DayButton);
