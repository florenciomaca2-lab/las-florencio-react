import "./Item.css";
import  { Link } from "react-router-dom";

function Item({id, nombre, precio, imagen}){
    return (
        <article className="Item">
            <img src={imagen} alt={nombre} />

            <h3>{nombre}</h3>

            <p>${precio}</p>

            <Link to={'/item/${id}'}>
            <button>Ver detalle</button>
            </Link>

        </article>
    );
}

export default Item;