import React from 'react';

const CardBody = ({ courseTitle, courseMeta }) => {
  return (
    <div>
      <h4>{courseTitle}</h4>
      <p>{courseMeta}</p>
    </div>
  );
};

export default CardBody;
