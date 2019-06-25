import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import './scss/Tile.scss';

class Tile extends React.Component {
  render() {
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
          {this.props.className === 'parking-place-free' ? null : (
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
