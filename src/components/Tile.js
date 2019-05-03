import React from "react";

const Tile = props => {
  return (
    <div className="col">
      <div className="parking-spot">
        <svg width="160" height="160">
          <rect x="50" y="20" rx="20" ry="20" width="100" height="150" />
          Sorry, your browser does not support inline SVG.
        </svg>
        <div className="text-center"> {props.car} </div>
      </div>
    </div>
  );
};

export default Tile;
