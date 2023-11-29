import React from 'react';
import { Card } from 'react-bootstrap';

const ItemCard = ({ item }) => {
  return (
    <Card style={{ width: '18rem' , height : '20rem'}}>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Price: ${item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
