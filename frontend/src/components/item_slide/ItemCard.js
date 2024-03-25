import React from 'react';
import { Card } from 'react-bootstrap';

const ItemCard = ({ item }) => {
  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <div style={{ maxHeight: '50%', overflow: 'hidden' }}>
        <Card.Img variant="top" src={item.imageUrl} style={{ width: '100%', objectFit: 'cover' }} />
      </div>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Price: ${item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
