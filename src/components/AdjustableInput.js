import React from 'react';
import { Input } from 'semantic-ui-react';

class AdjustableInput extends React.Component {
  render() {
    return (
      <div className="input">
        <span>{this.props.inputHeader}</span>
        <Input
          disabled={this.props.disabled}
          value={this.props.value}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default AdjustableInput;
