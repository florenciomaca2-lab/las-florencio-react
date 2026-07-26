import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "../components/CartWidget.css";

function CartWidget () {

    const { carrito } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <i className="bi bi-bag"></i>
            <span>{carrito.length}</span>
        </div>
    );
}

export default CartWidget;