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

function ItemList() {
    return (
        <>
            <h2>Productos</h2>
            <div className="item-list">
                <Item 
                nombre="Remera Básica"
                precio={25000}
                imagen={remeraBasica}
                />

                <Item 
                       nombre="Palazzo Cleo"
                precio={35000}
                imagen={palazzoTiras}
                />
                <Item 
                       nombre="Vestido Real"
                precio={40000}
                imagen={vdoRealf}
                imagen={vdoRealb}
                />

            </div>
        </>
    );
}

export default ItemList;