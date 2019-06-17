import React from 'react';

import './scss/Separator.scss';

const Separator = props => {
  return (
    <div className="text-center">
      <div className="separator">{props.spotsType}</div>
    </div>
  );
};

export default Separator;
