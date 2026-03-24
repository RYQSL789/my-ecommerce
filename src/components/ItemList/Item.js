import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <Col sm={12} md={4} className="mb-4">
            <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Link to={`/item/${product.id}`}>
                        <Button variant="primary">Ver detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;