import "./ItemListContainer.css";

import ItemList from "./ItemList";
import productos from "../data/productos";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {

    const { categoria } = useParams();

    let productosFiltrados = productos;

    if (categoria) {
        productosFiltrados = productos.filter(
            (producto) => producto.categoria.toLowerCase() === categoria
        );
    }
    return (
        <section className="item-list-container">

            <h1>
                {categoria ? categoria : greeting}
            </h1>

            <p>Explorá nuestra colección de ropa</p>

            <ItemList productos={productosFiltrados} />

        </section>
    )
}

export default ItemListContainer;