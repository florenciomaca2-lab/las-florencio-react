import "./ItemDetail.css";
import ItemCount from "../components/ItemCount";

function ItemDetail({ nombre, precio, imagen, descripcion, stock }) {
    return (
        <section className="item-detail">
            <img src={imagen} alt={nombre} />

            <div className="detalle-info">
                <h2>{nombre}</h2>

                <h3>${precio}</h3>

                <p>{descripcion}</p>

                <p><strong>Stock:</strong>{stock}</p>

                <ItemCount />
            </div>

        </section>
    )
}

export default ItemDetail;