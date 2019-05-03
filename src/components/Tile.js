import React from "react";

const Tile = props => {
  return (
    <div className="col">
      <div className="parking-spot">
        <div className="text-center">
          {props.car}
          <svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            <rect
              className="parking-place"
              preserveAspectRatio="none"
              x="0"
              width="100"
              height="160"
              rx="15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Tile;
