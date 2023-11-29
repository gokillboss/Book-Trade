import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import API from '../../API_Interface/API_Interface';

const LoginPage = ({ setUser, isAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const api = new API();
    try {
      const userInfo = await api.login(email, password);
      if (userInfo.status === 'OK') {
        setUser(userInfo.user);
        navigate("/");
      } else {
        setNotice('Wrong username or password');
      }
    } catch (error) {
      console.error("Login error:", error);
      setNotice('Login failed. Please try again.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mt-5 text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
            {notice && <div className="text-center text-danger mt-3">{notice}</div>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
