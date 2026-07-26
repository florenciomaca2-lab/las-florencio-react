import "./ItemList.css";
import Item from "./Item";

function ItemList({ productos }) {

    return (
        <>
            <h2>Productos</h2>
            
            <div className="item-list">
                {
                    productos.map((producto) => (
                        <Item
                            key={producto.id}
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