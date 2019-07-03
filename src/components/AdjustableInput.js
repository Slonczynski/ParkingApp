import React from 'react';
import { Input } from 'semantic-ui-react';

import './scss/AdjustableInput.scss';

class AdjustableInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div className="input">
        <span>{this.props.inputHeader}</span>
        <Input
          size="large"
          fluid
          label={this.props.label}
          disabled={this.props.disabled}
          value={this.props.disabled ? this.props.value : this.state.value}
          placeholder={this.props.placeholder}
          onChange={e => e.target.value}
        />
      </div>
    );
  }
}

export default AdjustableInput;
