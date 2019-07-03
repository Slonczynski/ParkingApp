import React from 'react';
import { Grid, Label, Icon } from 'semantic-ui-react';
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
        <div className="spot-number">{this.props.car}</div>

        <img
          className={this.state.parkingClassname}
          src={require('./tile.svg')}
          alt="parking-place"
        />
        {this.props.className === 'parking-place-free' ? null : (
          <Label className="spot-occupant" size="big">
            {this.props.name}
            <Icon name="delete" />
          </Label>
        )}
      </div>
    );
  }
}

export default Tile;
