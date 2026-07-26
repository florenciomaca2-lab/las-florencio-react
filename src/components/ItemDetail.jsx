import "./ItemDetail.css";
import ItemCount from "../components/ItemCount";

function ItemDetail({ producto }) {
    return (
        <section className="item-detail">
            <img src={producto.imagen} alt={producto.nombre} />

            <div className="detalle-info">
                <h2>{producto.nombre}</h2>

                <h3>${producto.precio}</h3>

                <p>{producto.descripcion}</p>

                <p>
                    <strong>Stock:</strong> {producto.stock}
                </p>

                <ItemCount
                    stock={producto.stock}
                    producto={producto}
                />
            </div>

        </section>
    )
}

export default ItemDetail;