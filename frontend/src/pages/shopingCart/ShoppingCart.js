import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import API from "../../API_Interface/API_Interface";

const ShoppingCart = ({ user }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch the user's cart items from the API based on the user's ID
    const fetchCartItems = async () => {
      if (user) {
        const api = new API();
        try {
          const response = await api.getCartItems(user.id); // Replace with your API method to get cart items
          setCartItems(response.cartItems);
          setTotalPrice(response.totalPrice);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      }
    };

    fetchCartItems();
  }, [user]);

  const handleRemoveItem = async (itemId) => {
    // Remove an item from the cart
    const updatedCart = cartItems.filter((item) => item.id !== itemId);

    // Update the cart items in the API
    const api = new API();
    try {
      await api.updateCart(user.id, updatedCart); // Replace with your API method to update the cart
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <Container>
      <h2 className="mt-5 mb-3">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <Button variant="primary">Checkout</Button>
        </>
      )}
    </Container>
  );
};

export default ShoppingCart;
