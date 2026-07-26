import { useParams } from "react-router-dom";

import productos from "../data/productos";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
    const { id } = useParams();

    const producto = productos.find(
        (producto) => producto.id === Number(id)
    );
    return <ItemDetail producto={producto} />;

};

export default ItemDetailContainer