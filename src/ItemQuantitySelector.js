import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const ItemQuantitySelector = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);
  const addToCart = () => addItem(product, quantity);

  return (
    <div className="d-flex align-items-center">
      <Button onClick={decrease}>-</Button>
      <span className="mx-2">{quantity}</span>
      <Button onClick={increase}>+</Button>
      <Button variant="success" className="ms-2" onClick={addToCart}>Agregar</Button>
    </div>
  );
};

export default ItemQuantitySelector;