import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(producto, cantidad) {

        const productoExistente = carrito.find(
            (item) => item.id === producto.id
        );

        if (productoExistente) {

            const carritoActualizado = carrito.map((item) =>
                item.id === producto.id
                    ? {
                        ...item,
                        cantidad: item.cantidad + cantidad
                    }
                    : item
            );

            console.log("CARRITO ACTUALIZADO:", carritoActualizado);

            setCarrito(carritoActualizado);

        } else {

            const nuevoProducto = {
                ...producto,
                cantidad
            };

            const carritoNuevo = [
                ...carrito,
                nuevoProducto
            ];

            console.log("CARRITO NUEVO:", carritoNuevo);

            setCarrito([
                ...carrito,
                nuevoProducto
            ]);
        }
    }

    function cantidadTotal() {
        return carrito.reduce(
            (total, producto) => total + producto.cantidad,
            0
        );
    }

    return (
        <CartContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                cantidadTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;