import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "../components/CartWidget.css";

function CartWidget() {

    const { cantidadTotal } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <i className="bi bi-bag"></i>
            <span>{cantidadTotal()}</span>
        </div>
    );
}

export default CartWidget;