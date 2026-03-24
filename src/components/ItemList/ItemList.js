import { Row } from 'react-bootstrap';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <Row className="g-4">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </Row>
  );
};

export default ItemList;