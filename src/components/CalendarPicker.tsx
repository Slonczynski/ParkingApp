import React from 'react';
import Calendar from 'react-calendar';
import { Grid, Modal, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import { bindActionCreators } from 'redux';
import {
  updatePreviousDay,
  updateNextDay,
  updateCurrentDay
} from './store/actions/actionCreator';

import './scss/CalendarPicker.scss';

type Props = {
  switcherReducer?: any;
  updateCurrentDay?: any;
  updateNextDay?: any;
  updatePreviousDay?: any;
  handleClose: any;
  openModal: any;
}

type State = {
  date: any;
  openModal: any;
}

class CalendarPicker extends React.Component<Props, State> {
  // Getting current date from switcherReducer timestamp to maintain data coherency.
  constructor(props: Props) {
    super(props);
    this.state = {
      date: new Date(this.props.switcherReducer.currentDay.timestamp),
      openModal: true
    };
  }
  componentDidUpdate() {
    // To update the calendar current value if someone changes date through Navigation Bar
    const dateFromState = new Date(this.state.date);
    const dateFromReducer = new Date(
      this.props.switcherReducer.currentDay.timestamp
    );
    if (dateFromState.toISOString() !== dateFromReducer.toISOString()) {
      this.setState({
        ...this.state,
        date: new Date(this.props.switcherReducer.currentDay.timestamp)
      });
    }
  }

  onChange = (date: any) => {
    this.setState(
      { ...this.state, date },
      // Making callback here prevents the state from being one step behind
      () => (
        this.props.updateCurrentDay(DateTime.fromJSDate(this.state.date)), // eslint-disable-line
        this.props.updateNextDay(
          DateTime.fromJSDate(this.state.date).plus({ days: 1 })
        ),
        this.props.updatePreviousDay(
          DateTime.fromJSDate(this.state.date).minus({ days: 1 })
        )
      )
    );
    this.props.handleClose();
  };

  render() {
    return (
      <Modal basic open={this.props.openModal} onClose={this.props.handleClose}>
        <Header
          className="calendar-header"
          centered="true"
          content="Wybierz datę:"
        />
        <Modal.Content>
          <Grid centered>
            <Calendar
              className="react-calendar"
              calendarType="ISO 8601"
              locale="pl-PL"
              value={this.state.date}
              onChange={this.onChange}
            />
          </Grid>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      updatePreviousDay,
      updateNextDay,
      updateCurrentDay
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarPicker);
