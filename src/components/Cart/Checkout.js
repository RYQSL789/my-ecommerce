import { useContext } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import Brief from './Brief';

const Checkout = () => {
  const { cart, totalPrice, clear } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Container className="mt-5">
        <Alert variant="info">El carrito está vacío.</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Resumen de tu compra</h2>
      <Brief cart={cart} totalPrice={totalPrice} />
      <div className="mt-4 d-flex gap-2">
        <Button variant="danger" onClick={clear}>Vaciar Carrito</Button>
        <Button variant="success" onClick={() => alert("¡Gracias por tu compra!")}>
          Finalizar Compra
        </Button>
      </div>
    </Container>
  );
};

export default Checkout;