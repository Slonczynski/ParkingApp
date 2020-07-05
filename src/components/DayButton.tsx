import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';

import CalendarPicker from './CalendarPicker';
import './scss/DayButton.scss';

type DayButtonProps = {
  weekday?: any;
  icon: any;
  text?: string;
  id?: string;
  requestedDay?: any;
  onClickValue?: any;
}

const DayButton = (props: DayButtonProps) => {
  const { weekday, icon, text, id, requestedDay, onClickValue } = props;
  const [openModal, setOpenModal] = useState(false)

  const showModal = () => {
    setOpenModal(true)
  };

  const hideModal = () => {
    setOpenModal(false)
  };

  return weekday ? (
    <div className="text-center">
      <div className="switcher" id={id} onClick={showModal}>
        <CalendarPicker
          openModal={openModal}
          handleClose={hideModal}
        />
        <i
          className={`circular inverted teal large arrow 
        ${icon} icon`}
        />
        <Segment
          compact
          inverted
          textAlign="center"
          size="small"
          color="blue"
        >
          <div className="day-button-weekday">
            {text}
            {weekday}
          </div>
        </Segment>
      </div>
    </div>
  ) : (
    <div className="text-center">
      <div className="switcher" id={id} onClick={onClickValue}>
        <i
          className={`circular inverted teal large arrow 
      ${icon} icon`}
        />
        <div className="day-button-text">
          {text}
          <br />
          {requestedDay}
        </div>
      </div>
    </div>
  );
}

export default DayButton;