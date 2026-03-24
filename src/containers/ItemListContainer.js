                           import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ItemList from '../components/ItemList/ItemList';
import { getProducts } from '../services/mockAPI';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProducts(id).then(res => setProducts(res));
    }, [id]);

    return (
        <Container className="mt-4">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </Container>
    );
};

export default ItemListContainer;