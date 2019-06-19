import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import './scss/Tile.scss';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: ''
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="parking-spot">
        <div className="text-center">
          <div className="spot-number">{this.props.car}</div>
        </div>
        <div className="text-center">
          <img
            className="parking-place"
            src={require('./tile.svg')}
            alt="parking-pace"
          />
          <Label className="spot-occupant" size="large">
            Konrad
            <Icon name="delete" />
          </Label>
        </div>
      </div>
    );
  }
}

export default Tile;
