import "./ItemList.css";
import Item from "./Item";
import productos from "../data/productos";

function ItemList() {
    return (
        <>
            <h2>Productos</h2>
            <div className="item-list">
                {
                    productos.map((producto) => (
                        <Item
                            id={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            imagen={producto.imagen}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default ItemList;