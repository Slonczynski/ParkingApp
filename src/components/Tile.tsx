import React, { useState } from 'react';
import { Label } from 'semantic-ui-react';

import ActionModal from './ActionModal';
import ConfirmationModal from './ConfirmationModal';
import './scss/Tile.scss';

type TileProps = {
  car: string;
  className: string;
  name: any;
}

const Tile = (props: TileProps) => {
const [openModal, setOpenModal] = useState(false)

 const showModal = () => {
    setOpenModal(true)
  };

  const hideModal = () => {
    setOpenModal(false)
  };

  return (
    <div className="parking-spot">
      <div className="spot-number">{props.car}</div>
      <img
        onClick={showModal}
        className={props.className}
        src={require('./svg/tile.svg')}
        alt="parking-place"
      />

      {props.className === 'parking-place-free' ? (
        <ActionModal
          open={openModal}
          handleClose={hideModal}
          car={props.car}
        />
      ) : (
        <div>
          <Label
            onClick={showModal}
            className="spot-occupant"
            size="big"
          >
            {props.name.join('')}
          </Label>
          <ConfirmationModal
            open={openModal}
            handleClose={hideModal}
            car={props.car}
            name={props.name.join('')}
          />
        </div>
      )}
    </div>
  );
}

export default Tile;
