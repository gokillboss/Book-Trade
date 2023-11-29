import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import API from "../../API_Interface/API_Interface";

const SignUpPage = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (userDetails.password !== userDetails.confirmPassword) {
      setRegistrationStatus("Passwords do not match!");
      return;
    }

    // Create an instance of APIInterface
    const api = new API();

    // Prepare data for the API
    const userData = {
      username: userDetails.username,
      first_name: userDetails.firstName,
      last_name: userDetails.lastName,
      email: userDetails.email,
      password: userDetails.password,
      phone_number: userDetails.phoneNumber,
    };

    // Call the register method of APIInterface
    try {
      const response = await api.register(userData);
      console.log("Registration successful:", response);

      // Set registration status to success
      setRegistrationStatus("Registration successful.");

      // You can handle automatic login here if you have a login function
      // Example: await api.login(userDetails.email, userDetails.password);

    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration error, e.g., show error message to the user
      setRegistrationStatus("Registration failed. Please try again.");
    }
  };

  return (
    <Container className="mb-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mt-5 text-center">Sign Up</h2>
          {registrationStatus && (
            <Alert variant={registrationStatus === "Registration successful. Logging in..." ? "success" : "danger"}>
              {registrationStatus}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={userDetails.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={userDetails.firstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={userDetails.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={userDetails.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
