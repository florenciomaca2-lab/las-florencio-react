import "./ItemListContainer.css";
import ItemList from "./ItemList"

function ItemListContainer({ greeting }) {
    return (
        <section className="item-list-container">
            <h1>{greeting}</h1>
            <p>Explorá nuestra colección de ropa</p>
            <ItemList />
       </section>
    )
}

export default ItemListContainer;