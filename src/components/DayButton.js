import React from "react";
import RequestedDate from "./RequestedDate";

const dayConfig = {
  back: {
    arrowDirection: "left",
    text: "Wczoraj"
  },
  now: {
    text: "Dzisiaj"
  },
  forward: {
    arrowDirection: "right",
    text: "Jutro"
  }
};

const DayButton = props => {
  const { arrowDirection, text } = dayConfig[props.day];
  return (
    <div className="text-center">
      <div className="switcher">
        <i
          className={`circular inverted teal large arrow ${arrowDirection} icon`}
        />
        <div className={props.day}>
          {text}
          <br />
          {/* fix this */}
          <RequestedDate day={props.day} />
        </div>
      </div>
    </div>
  );
};

export default DayButton;
