import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(producto, cantidad) {

        const nuevoProducto = {
            ...producto,
            cantidad
        };

        const carritoActualizado = [...carrito, nuevoProducto];

        setCarrito(carritoActualizado);

        console.log(carritoActualizado);
    }
    
    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;