import { Link } from "react-router-dom";
import { Button, Badge,  } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

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


  export default CartButton;