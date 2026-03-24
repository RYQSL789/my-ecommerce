              import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { getProductById } from '../services/mockAPI';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then(res => setProduct(res));
  }, [id]);

  return (
    <Container className="mt-4">
      {product ? <ItemDetail product={product} /> : <p>Cargando producto...</p>}
    </Container>
  );
};

export default ItemDetailContainer;