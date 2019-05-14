import React from "react";
import RequestedDate from "./RequestedDate";

const dayConfig = {
  yesterday: {
    arrowDirection: "left",
    text: "Wczoraj"
  },
  today: {
    text: "Dzisiaj"
  },
  tomorrow: {
    arrowDirection: "right",
    text: "Jutro"
  }
};

const DayButton = props => {
  const { arrowDirection, text } = dayConfig[props.day];
  return (
    <div className="text-center">
      <div className="switcher" onClick="./">
        <i
          className={`circular inverted teal large arrow ${arrowDirection} icon`}
        />
        <div className={props.day}>
          {text}
          <br />
          <RequestedDate day={props.day} />
        </div>
      </div>
    </div>
  );
};

export default DayButton;
