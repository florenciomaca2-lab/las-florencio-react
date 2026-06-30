import "./ItemList.css";
import Item from "./Item";

import remeraBasica from "../assets/imagen/RemeraCamel.jpg"
import babuchaEcocuero from "../assets/imagen/BabuchaEcocuero.jpg"
import joggerCameron from "../assets/imagen/JoggerRusticoCameron.jpg"
import monoRojo from "../assets/imagen/MonoRojo.jpg"
import palazzoTiras from "../assets/imagen/PalazzoTiras.jpg"
import poleron from "../assets/imagen/PoleronMarron.jpg"
import remeraChannel from "../assets/imagen/RemeraChannel.jpg"
import remeraMoschino from "../assets/imagen/RemeraMoschino.jpg"
import sweaterCuadrille from "../assets/imagen/SweaterCuadrille.jpg"
import sweaterEstrella from "../assets/imagen/SweaterEstrella.jpg"
import sweaterOchos from "../assets/imagen/SweaterOchos.jpg"
import sweaterRayado from "../assets/imagen/SweaterRayado.jpg"
import vdoBrillos from "../assets/imagen/VestidoBrillos.jpg"
import vdoRealb from "../assets/imagen/VestidoHombreras.jpg"
import vdoNegrof from "../assets/imagen/VestidoCuelloNegro.jpg"
import vdoNegrob from "../assets/imagen/VestidoCuelloNegroBack.jpg"
import vdoHombreras from "../assets/imagen/VestidoconHombreras.jpg"
import vdoRealf from "../assets/imagen/VestidoReal.jpg"

const productos = [
    {
        id: 1,
        nombre: "Remera Básica",
        precio: 25000,
        imagen: remeraBasica,
    },
    {
        id: 2,
        nombre: "Remera Channel",
        precio: 23000,
        imagen: remeraChannel,
    },
    {
        id: 3,
        nombre: "Remera Moschino",
        precio: 24000,
        imagen: remeraMoschino,
    },
    {
        id: 4,
        nombre: "Palazzo Cleo",
        precio: 35000,
        imagen: palazzoTiras,
    },
    {
        id: 5,
        nombre: "Jogger Cameron",
        precio: 36000,
        imagen: joggerCameron,
    },
    {
        id: 6,
        nombre: "Babucha Randall",
        precio: 33000,
        imagen: babuchaEcocuero,
    },
    {
        id: 7,
        nombre: "Poleron Julie",
        precio: 28000,
        imagen: poleron,
    },
    {
        id: 8,
        nombre: "Sweater Tabata",
        precio: 21000,
        imagen: sweaterCuadrille,
    },
    {
        id: 9,
        nombre: "Sweater Star",
        precio: 29000,
        imagen: sweaterEstrella,
    },
    {
        id: 10,
        nombre: "Sweater Ellis",
        precio: 29000,
        imagen: sweaterOchos,
    },
    {
        id: 11,
        nombre: "Sweater Boyd",
        precio: 29000,
        imagen: sweaterRayado,
    },
    {
        id: 12,
        nombre: "Vestido Shine",
        precio: 40000,
        imagen: vdoBrillos,
    },
    {
        id: 13,
        nombre: "Vestido Victoria",
        precio: 30000,
        imagen: vdoHombreras,
    },
    {
        id: 14,
        nombre: "Vestido Celine",
        precio: 38000,
        imagen: vdoNegrof,
    },
    {
        id: 15,
        nombre: "Vestido Real",
        precio: 41000,
        imagen: vdoRealf,
    }
]

function ItemList() {
    return (
        <>
            <h2>Productos</h2>
            <div className="item-list">
                {
                    productos.map((producto) => (
                        <Item
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