import React from "react";

const dayConfig = {
  yesterday: {
    arrowDirection: "left",
    text: "yesterday"
  },
  tomorrow: {
    arrowDirection: "right",
    text: "tomorrow"
  }
};

const DayButton = props => {
  return (
    <div className="text-center">
      {/* <i
        className={`circular inverted teal large arrow ${arrowDirection} icon`} */}
      />
      <div className="yesterday">
        Wczoraj
        <br />
        30.04.2019
      </div>
    </div>
  );
};

export default DayButton;
