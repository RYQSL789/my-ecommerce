// JavaScript source code
                                       import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const quantity = totalQuantity();

    return (
        <Link to="/cart" className="text-decoration-none text-dark">
            <FontAwesomeIcon icon={faShoppingCart} />
            {quantity > 0 && <span className="ms-1 badge bg-danger">{quantity}</span>}
        </Link>
    );
};

export default CartWidget;