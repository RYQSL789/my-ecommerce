import { useContext, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleOnAdd = () => {
    addItem(product, quantity);
    alert(`Agregaste ${quantity} unidad(es) al carrito`);
  };

  return (
    <Card className="p-4 shadow-sm">
      <Row>
        <Col md={6}>
          <Card.Img src={product.image} alt={product.name} />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title as="h2">{product.name}</Card.Title>
            <Card.Text className="text-muted">{product.description}</Card.Text>
            <Card.Text as="h4" className="mb-4">${product.price}</Card.Text>
            
            {/* Pasamos el estado de cantidad al selector */}
            <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
            
            {/* El botón de acción final */}
            <AddItemButton handleAdd={handleOnAdd} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;