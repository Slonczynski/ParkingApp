import React from "react";

const dateConfig = {
  yesterday: {
    offset: -1
  },
  today: {
    offset: 0
  },
  tomorrow: {
    offset: +6
  }
};

const RequestedDate = props => {
  const { offset } = dateConfig[props.day];
  const d = new Date();

  //   [("0" + d.getDate()).slice(-2),
  //   ("0" + (d.getMonth() + 1)).slice(-2) + 1,
  //   d.getFullYear()
  // ].join("-");

  const dd = (d.getDate() < 10 ? "0" : "") + (d.getDate() + offset);
  const MM = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
  const yyyy = d.getFullYear();

  const ww = dd + "-" + MM + "-" + yyyy;
  console.log(ww);

  return <div className="current-date">{RequestedDate}</div>;
};

export default RequestedDate;
