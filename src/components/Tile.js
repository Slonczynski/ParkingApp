import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import './scss/Tile.scss';

const Tile = props => {
  return (
    <div className="parking-spot">
      <div className="text-center">
        <div className="spot-number">{props.car}</div>
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
};

export default Tile;
