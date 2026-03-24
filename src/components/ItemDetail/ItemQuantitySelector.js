import { Button, ButtonGroup } from 'react-bootstrap';

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
  const handleSubtract = () => quantity > 1 && setQuantity(quantity - 1);
  const handleAdd = () => setQuantity(quantity + 1);

  return (
    <div className="d-flex align-items-center">
      <span className="me-3">Cantidad:</span>
      <ButtonGroup>
        <Button variant="outline-secondary" onClick={handleSubtract}>-</Button>
        <Button variant="light" disabled>{quantity}</Button>
        <Button variant="outline-secondary" onClick={handleAdd}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemQuantitySelector;