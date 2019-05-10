import React from "react";

const Tile = props => {
  return (
    <div className="col">
      <div className="parking-spot">
        <div className="text-center">
          {props.car}
          <img src={require("./tile.svg")} alt="Kiwi standing on oval" />
        </div>
      </div>
    </div>
  );
};

export default Tile;
