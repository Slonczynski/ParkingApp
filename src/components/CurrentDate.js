import React from "react";

const d = new Date();
const activeDy = [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("-");

const CurentDate = activeDay => {
  return { activeDay };
};

export default CurrentDate;
