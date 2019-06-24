import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import './scss/Tile.scss';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {}
    };
  }

  componentDidUpdate() {
    if (this.props.name !== '') {
      if (this.props.name !== this.state.name) {
        this.setState({
          name: this.props.name
        });
      }
    }
  }

  render() {
    console.log(this.state.name);
    return (
      <div className="parking-spot">
        <div className="text-center">
          <div className="spot-number">{this.props.car}</div>
        </div>
        <div className="text-center">
          <img
            className={this.props.className}
            src={require('./tile.svg')}
            alt="parking-place"
          />
          {Object.entries(this.state.name).length === 0 &&
          this.state.name.constructor === Object ? null : (
            <Label className="spot-occupant" size="large">
              {this.props.name}
              <Icon name="delete" />
            </Label>
          )}
        </div>
      </div>
    );
  }
}

export default Tile;
