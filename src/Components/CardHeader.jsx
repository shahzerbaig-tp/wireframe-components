import React from 'react';

const CardHeader = ({ courseType, cardHeaderStyle }) => {
  return (
    <div className={cardHeaderStyle}>
      <h3>{courseType}</h3>
    </div>
  );
};

export default CardHeader;
