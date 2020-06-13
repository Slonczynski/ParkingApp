import React from 'react';
import { Segment } from 'semantic-ui-react';

import CalendarPicker from './CalendarPicker';
import './scss/DayButton.scss';

type Props = {
  weekday?: any;
  icon?: any;
  text?: string;
  id?: string;
  requestedDay?: any;
  onClickValue?: any;
}

type State = {
  openModal: any;
}

class DayButton extends React.Component<Props, State> {
  constructor(props: Props) {
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
    //  Destructuring assignment
    const { weekday, icon, text, id, requestedDay, onClickValue } = this.props;
    return weekday ? (
      <div className="text-center">
        <div className="switcher" id={id} onClick={this.showModal}>
          <CalendarPicker
            openModal={this.state.openModal}
            handleClose={this.hideModal}
          />
          <i
            className={`circular inverted teal large arrow 
          ${icon} icon`}
          />

          <Segment
            compact
            inverted
            textAlign="center"
            size="small"
            color="blue"
          >
            <div className="day-button-weekday">
              {text}
              {weekday}
            </div>
          </Segment>
        </div>
      </div>
    ) : (
      <div className="text-center">
        <div className="switcher" id={id} onClick={onClickValue}>
          <i
            className={`circular inverted teal large arrow 
        ${icon} icon`}
          />
          <div className="day-button-text">
            {text}
            <br />
            {requestedDay}
          </div>
        </div>
      </div>
    );
  }
}
export default DayButton;
