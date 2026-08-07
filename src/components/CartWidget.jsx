import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import "../components/CartWidget.css";

function CartWidget() {

    const { cantidadTotal } = useContext(CartContext);

    return (
        <Link to="/cart" className="cart-widget">
            <i className="bi bi-bag"></i>
            <span>{cantidadTotal()}</span>
        </Link>
    );
}

export default CartWidget;