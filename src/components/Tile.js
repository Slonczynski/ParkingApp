import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import './scss/Tile.scss';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingClassname: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.parkingClassname !== this.props.className) {
      this.setState({
        parkingClassname: this.props.className
      });
    }
  }

  render() {
    return (
      <div className="parking-spot">
        <div className="text-center">
          <div className="spot-number">{this.props.car}</div>
        </div>
        <div className="text-center">
          <img
            className={this.state.parkingClassname}
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
