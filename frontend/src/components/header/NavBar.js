import React from "react";
import { Navbar, Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const NavBar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate(); // Initialize navigate

  // Handle logout and redirect to home page
  const handleLogout = () => {
    onLogout(); // Call the provided logout function
    navigate("/"); // Redirect to the home page
  };

  return (
    <div>
      <Navbar
        bg="white"
        variant="dark"
        className="d-flex justify-content-between"
      >
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center ml-2"
        >
          <img
            src={require("../../pictures/Logo_Book.png")}
            alt="Logo"
            style={{ height: "4rem" }}
          />
          <span
            className="font-weight-bold fs-4 mt-3 d-inline-block mb-2"
            style={{ color: "#6083a3" }}
          >
            Book for seekers
          </span>
        </Link>

        <Form
          inline
          className="mr-4 d-flex align-items-center"
          style={{ width: "35%" }}
        >
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button
            style={{ backgroundColor: "lightblue", borderColor: "#6083a3" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Form>

        <div className="mr-3">
          {isLoggedIn ? (
            <>
              <Link to="profile">
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "lightblue",
                    borderColor: "#6083a3",
                  }}
                >
                  Profile
                </Button>
              </Link>
              <Button
                variant="primary"
                onClick={handleLogout} // Call handleLogout on logout button click
                style={{
                  backgroundColor: "lightblue",
                  borderColor: "#6083a3",
                  margin: "5px",
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "lightblue",
                    borderColor: "#6083a3",
                    margin: "5px",
                  }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button
                  variant="primary"
                  style={{ backgroundColor: "lightblue", borderColor: "#6083a3" }}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
