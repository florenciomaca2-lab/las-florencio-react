import { useParams } from "react-router-dom";

import productos from "../data/productos";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
    const { id } = useParams();
    
    const producto = productos.find(
        (producto) => producto.id === Number(id)
    );
    return (
            <ItemDetail 
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            descripcion={producto.descripcion}
            stock={producto.stock}
            />
    )
};

export default ItemDetailContainer