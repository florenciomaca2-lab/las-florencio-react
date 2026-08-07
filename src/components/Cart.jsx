import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

    const { carrito } = useContext(CartContext);

    return (
        <div className="container mt-4">

            <h2>Carrito de compras</h2>
            {
                carrito.length === 0 ? (
                    <p>El carrito esta vacío</p>
                ) : (

                    carrito.map((producto) => (
                        <div key={producto.id}>

                            <h4>{producto.nombre}</h4>

                            <p>
                                Precio: ${producto.precio}
                            </p>

                            <p>
                                Cantidad: {producto.cantidad}
                            </p>

                        </div>
                    ))
                )
            }
        </div>
    );
}

export default Cart;