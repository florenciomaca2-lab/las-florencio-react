import ItemDetail from "../components/ItemDetail";
import remeraBasica from "../assets/imagen/RemeraCamel.jpg";

function ItemDetailContainer() {
    const producto ={
        id:1,
        nombre: "Remera Básica",
        precio: 25000,
        imagen: remeraBasica,
        descripcion: "Remera de algodón premium color camel.",
        stock: 8,
    };

    return (
            <ItemDetail 
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            descripcion={producto.descripcion}
            stock={producto.stock}
            />
    )
}

export default ItemDetailContainer