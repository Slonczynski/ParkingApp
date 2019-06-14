import React from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

class AdjustableInput extends React.Component {
  render() {
    return (
      <Input
        disabled={this.props.disabled}
        value={DateTime.fromISO(
          this.props.switcherReducer.currentDay.timestamp
        ).toFormat('dd-MM-yyyy')}
      />
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(AdjustableInput);
