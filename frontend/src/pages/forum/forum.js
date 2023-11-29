import React, { useState } from 'react';
// eslint-disable-next-line
import { Container, Row, Col, ListGroup, Form, Button, Card } from 'react-bootstrap';

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    if (newPost) {
      setPosts([...posts, newPost]);
      setNewPost('');
    }
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Book Discussion Forum</h1>
          <Form onSubmit={handlePostSubmit}>
            <Form.Group className="mb-3" controlId="newPost">
              <Form.Label>Share your thoughts</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={newPost} 
                onChange={handlePostChange}
                placeholder="What are you thinking about?" 
              />
            </Form.Group>
            <Button variant="primary" type="submit">Post</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {posts.map((post, index) => (
              <ListGroup.Item key={index}>{post}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ForumPage;
