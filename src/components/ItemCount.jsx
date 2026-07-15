import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock }) {
 
    const [cantidad, setCantidad] = useState(1);
  
  function aumentarCantidad() {
    if ( cantidad < stock)
    setCantidad (cantidad + 1);
  }

  function disminuirCantidad() {
    if (cantidad > 1) {
        setCantidad(cantidad - 1);
    }
  }

    return (
        <div className="item-count">
            <div className="contador">
                <button onClick={disminuirCantidad}>-</button>

                <span>{cantidad}</span>

                <button onClick={aumentarCantidad}>+</button>
            </div>

            <button className="btn-agregar">
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;