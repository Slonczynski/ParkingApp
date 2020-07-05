import React from 'react';

import './scss/Separator.scss';

type SeparatorProps = {
  spotsType: string;
}

const Separator = (props: SeparatorProps) => {
  return (
    <div className="text-center">
      <div className="separator">
        <span>{props.spotsType}</span>
      </div>
    </div>
  );
};

export default Separator;
