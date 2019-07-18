import React from 'react';
import { Segment } from 'semantic-ui-react';

import CalendarPicker from './CalendarPicker';
import './scss/DayButton.scss';

class DayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  showModal = () => {
    this.setState({ ...this.state, openModal: true });
  };

  hideModal = () => {
    this.setState({ ...this.state, openModal: false });
  };

  render() {
    return this.props.weekday ? (
      <div className="text-center">
        <div className="switcher" id={this.props.id} onClick={this.showModal}>
          <CalendarPicker
            openModal={this.state.openModal}
            handleClose={this.hideModal}
          />
          <i
            className={`circular inverted teal large arrow 
          ${this.props.icon} icon`}
          />

          <Segment
            compact
            inverted
            textAlign="center"
            size="small"
            color="blue"
          >
            <div className="day-button-weekday">
              {this.props.text}
              {this.props.weekday}
            </div>
          </Segment>
        </div>
      </div>
    ) : (
      <div className="text-center">
        <div
          className="switcher"
          id={this.props.id}
          onClick={this.props.onClickValue}
        >
          <i
            className={`circular inverted teal large arrow 
        ${this.props.icon} icon`}
          />
          <div className="day-button-text">
            {this.props.text}
            <br />
            {this.props.requestedDay}
          </div>
        </div>
      </div>
    );
  }
}
export default DayButton;
