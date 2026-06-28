import "./Item.css";

function Item({nombre, precio, imagen}){
    return (
        <article className="Item">
            <img src={imagen} alt={nombre} />

            <h3>{nombre}</h3>

            <p>${precio}</p>

            <button>Ver detalle</button>

        </article>
    );
}

export default Item;