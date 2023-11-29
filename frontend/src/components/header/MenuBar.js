import React from "react";
import { Button, Badge, Dropdown } from "react-bootstrap";
import { FaShoppingCart, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartButton = ({ itemCount }) => {
  return (
    <Button
      variant="primary"
      as={Link}
      to="/cart"
      style={{
        background: "#6083a3",
        borderColor: "#6083a3",
        color: "white",
      }}
    >
      <FaShoppingCart />
      {itemCount > 0 && (
        <Badge variant="light" className="ml-1">
          {itemCount}
        </Badge>
      )}
    </Button>
  );
};

const MenuBar = ({ user, onLogout }) => {
  return (
    <div
      className="d-flex justify-content-between"
      style={{ backgroundColor: "#6083a3", height: "auto" , alignItems: 'center'}}
    >
      <div style={{ marginLeft: "15%" }}>
        <Dropdown>
          <Dropdown.Toggle
            variant="Info"
            id="dropdown-basic"
            className="font-weight-bold fs-5 d-inline-block"
            style={{
              background: "#6083a3",
              borderColor: "#6083a3",
              color: "white",
            }}
          >
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div variant="Info" className="p-1 font-weight-bold">
        <Button
          className="hover-button"
          as={Link}
          to="/forum"
          style={{
            background: "#6083a3",
            borderColor: "#6083a3",
            color: "white",
          }}
        >
          Forum
        </Button>
      </div>

      <div variant="Info" className="p-1 font-weight-bold">
        <Button
          className="hover-button"
          as={Link}
          to="/listing" // Add the link to the listing page
          style={{
            background: "#6083a3",
            borderColor: "#6083a3",
            color: "white",
          }}
        >
          <FaBook /> Listing
        </Button>
      </div>
      <div variant="Info" className="p-1" font-weight-bold>
        <Button
          className="hover-button"
          style={{
            background: "#6083a3",
            borderColor: "#6083a3",
            color: "white",
          }}
        >
          Filter
        </Button>
      </div>
      <div variant="Info" className="p-1" font-weight-bold>
        <Button
          className="hover-button"
          style={{
            background: "#6083a3",
            borderColor: "#6083a3",
            color: "white",
          }}
        >
          Review
        </Button>
      </div>

      <div style={{ marginRight: "15%", padding: "5px 5px" }}>
        {user ? (
          <>
            <span className="text-white mr-2">Welcome, {user.username}</span>
            <Button
              variant="light"
              onClick={onLogout}
              style={{ color: "#6083a3" }}
            >
              Logout
            </Button>
          </>
        ) : (
          <CartButton />
        )}
      </div>
    </div>
  );
};

export default MenuBar;
