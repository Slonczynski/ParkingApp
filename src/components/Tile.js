import React from 'react';
import ActionModal from './ActionModal';

const Tile = props => {
  return (
    <div className="col">
      <div className="parking-spot">
        <div className="text-center">
          <div className="spot-number"> {props.car}</div>
        </div>
        <div className="text-center">
          <img
            className="parking-place"
            src={require('./tile.svg')}
            alt="parking-pace"
          />
        </div>
      </div>
    </div>
  );
};

export default Tile;
