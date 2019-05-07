import React from "react";

const activeDay = () => {
  const d = new Date();
  const activeDay = console.log(
    [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("-")
  );
  return activeDay;
};

const CurrentDate = () => {
  return <div className="current-date">{activeDay()}</div>;
};

export default CurrentDate;
