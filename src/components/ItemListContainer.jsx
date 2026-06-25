import ItemList from "./ItemList"

function ItemListContainer({ greeting }) {
    return (
        <div>
            <h1>{greeting}</h1>
            <p>Explorá nuestra colección de ropa</p>
            <ItemList />
        </div>
    )
}

export default ItemListContainer