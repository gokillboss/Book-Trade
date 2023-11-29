import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import API from "../../API_Interface/API_Interface"; // Your API import

const ListBookPage = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    edition: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    // Send this file to the back-end
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming API.postBook is the method to call your API for book listing
      const response = await API.postBook(book);
      console.log(response);
      // Handle success (e.g., showing a success message or redirecting)
    } catch (error) {
      console.error("Error listing the book:", error);
      // Handle errors (e.g., showing an error message)
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h2>List a Book for Sale</h2>
          <Form onSubmit={handleSubmit}>
            {/* Form fields */}
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Edition</Form.Label>
              <Form.Control
                type="text"
                name="edition"
                value={book.edition}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={book.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={book.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => handleFileInput(e.target.files[0])}
              />
            </Form.Group>

            {/* Repeat for other fields like author, edition, etc. */}
            {/* ... */}

            <Button variant="primary" type="submit">
              List Book
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ListBookPage;
