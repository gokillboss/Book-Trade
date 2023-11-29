import React from "react";
import ItemCard from "./ItemCard";
import { Carousel, Row, Col } from "react-bootstrap";

const items = [
  {
    imageUrl: "path/to/image1.jpg",
    title: "Item 1",
    description: "Description of Item 1",
    price: 100,
  },
  {
    imageUrl: "path/to/image1.jpg",
    title: "Item 2",
    description: "Description of Item 1",
    price: 100,
  },
  {
    imageUrl: "path/to/image1.jpg",
    title: "Item 3",
    description: "Description of Item 1",
    price: 100,
  },
  {
    imageUrl: "path/to/image1.jpg",
    title: "Item 4",
    description: "Description of Item 1",
    price: 100,
  },
  {
    imageUrl: "path/to/image1.jpg",
    title: "Item 5",
    description: "Description of Item 1",
    price: 100,
  },
];

// 
const ItemSlider = () => {
  const getRandomItems = () => {
    let shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  // Create two sets of random items for two slides
  const randomItemsSet1 = getRandomItems();
  const randomItemsSet2 = getRandomItems();

  const slides = [randomItemsSet1, randomItemsSet2];

  return (
    <div className="m-4">
      <Carousel>
        {slides.map((slideItems, idx) => (
          <Carousel.Item key={idx}>
            <Row>
              {slideItems.map((item, index) => (
                <Col key={index} md={3}>
                  <ItemCard item={item} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ItemSlider;
