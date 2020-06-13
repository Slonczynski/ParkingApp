import React from 'react';

import './scss/Separator.scss';

const Separator = (props: any) => {
  return (
    <div className="text-center">
      <div className="separator">
        <span>{props.spotsType}</span>
      </div>
    </div>
  );
};

export default Separator;
