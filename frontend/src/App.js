import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/header/NavBar";
import MenuBar from "./components/header/MenuBar";
import HomePage from "./pages/home/Home";
import Login from "./pages/authenticate/Login";
import ShoppingCart from "./pages/shopingCart/ShoppingCart";
import ForumPage from "./pages/forum/forum";
import SignUpPage from "./pages/authenticate/SignUp";
import Profile from "./pages/profile/Profile";
import ListBookPage from "./pages/listing/ListBookPage";
function App() {
  const [user, setUser] = useState(null);
  const isLoggedIn = user !== null;
  const navigate = useNavigate();

  // Dummy cart items (update as needed)
  // eslint-disable-next-line
  const [cartItems, setCartItems] = useState([]);
    // eslint-disable-next-line
  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  // Handle user login
  const handleLogin = (userInfo) => {
    setUser(userInfo);
    navigate("/"); // Redirect to home after login
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <MenuBar />
      <Routes>
        <Route path="/login" element={<Login setUser={handleLogin} />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/cart"
          element={
            isLoggedIn ? <ShoppingCart /> : <Login setUser={handleLogin} />
          }
        />
        <Route
          path="/forum"
          element={isLoggedIn ? <ForumPage /> : <Login setUser={handleLogin} />}
        />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path='listing' element= {<ListBookPage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
