import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const Card = ({ styleCard, cardData }) => {
  const cardStyle = {
    height: '200px',
    width: '300px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    borderRadius: '4px',
    ...styleCard,
  };

  const { cardHeaderProps, cardBodyProps, cardFooterProps } = cardData;

  return (
    <div style={cardStyle}>
      <CardHeader {...cardData} />
      <CardBody {...cardData} />
      <CardFooter {...cardData} />
    </div>
  );
};

export default Card;

