                                   import { ListGroup } from 'react-bootstrap';

const Brief = ({ cart, totalPrice }) => {
  return (
    <ListGroup variant="flush">
      {cart.map(item => (
        <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
          <div>
            <h5>{item.name}</h5>
            <small>Cantidad: {item.quantity} x ${item.price}</small>
          </div>
          <span>${item.quantity * item.price}</span>
        </ListGroup.Item>
      ))}
      <ListGroup.Item className="text-end mt-3">
        <h4>Total a pagar: ${totalPrice()}</h4>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Brief;