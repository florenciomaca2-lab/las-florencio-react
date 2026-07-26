import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, producto }) {

    const [cantidad, setCantidad] = useState(1);

    function aumentarCantidad() {
        if (cantidad < stock)
            setCantidad(cantidad + 1);
    }

    function disminuirCantidad() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    function agregarCarrito() {
        console.log("Cantidad elegida:", cantidad);
    }

    return (
        <div className="item-count">
            <div className="contador">
                <button onClick={disminuirCantidad}>-</button>

                <span>{cantidad}</span>

                <button onClick={aumentarCantidad}>+</button>
            </div>

            <button
                className="btn-agregar"
                onClick={agregarCarrito}
            >
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;