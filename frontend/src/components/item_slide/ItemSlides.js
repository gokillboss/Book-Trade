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
    description: "Description of Item 2",
    price: 100,
  },
  {
    imageUrl: "path/to/image1.jpg",
    title: "Item 3",
    description: "Description of Item 3",
    price: 100,
  },
  {
    imageUrl: "path/to/image1.jpg",
    title: "Item 4",
    description: "Description of Item 4",
    price: 100,
  },
  {
    imageUrl: "path/to/image1.jpg",
    title: "Item 5",
    description: "Description of Item 5",
    price: 100,
  },
];

const ItemSlider = () => {
  const slides = [
    items.slice(0, 4), // First slide with first 4 items
    items.slice(4, 8), // Second slide with next 4 items
  ];

  return (
    <div className="m-4">
      <Carousel indicators={false} interval={null} wrap={false}>
        {slides.map((slideItems, idx) => (
          <Carousel.Item key={idx}>
            <Row xs={1} sm={2} md={4} className="g-4"> {/* Changed md={4} to display 4 items in a line */}
              {slideItems.map((item, index) => (
                <Col key={index} className="mb-4">
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
