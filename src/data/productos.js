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
        descripcion: "Remera básica de algodón premium, cómoda y versátil para cualquier ocasión.",
        stock: 8,
        categoria: "remeras",
    },
    {
        id: 2,
        nombre: "Remera Channel",
        precio: 23000,
        imagen: remeraChannel,
        descripcion: "Remera estampada con diseño moderno y excelente calidad.",
        stock: 6,
        categoria: "remeras",
    },
    {
        id: 3,
        nombre: "Remera Moschino",
        precio: 24000,
        imagen: remeraMoschino,
        descripcion: "Remera de algodón con estampa exclusiva y calce cómodo.",
        stock: 5,
        categoria: "remeras",
    },
    {
        id: 4,
        nombre: "Palazzo Cleo",
        precio: 35000,
        imagen: palazzoTiras,
        descripcion: "Palazzo de tela liviana con caída elegante y cintura cómoda.",
        stock: 4,
        categoria: "pantalones",
    },
    {
        id: 5,
        nombre: "Jogger Cameron",
        precio: 36000,
        imagen: joggerCameron,
        descripcion: "Jogger de rústico con excelente calce y terminaciones premium.",
        stock: 7,
        categoria: "pantalones",
    },
    {
        id: 6,
        nombre: "Babucha Randall",
        precio: 33000,
        imagen: babuchaEcocuero,
        descripcion: "Babucha de ecocuero, moderna y perfecta para looks urbanos.",
        stock: 3,
        categoria: "pantalones",
    },
    {
        id: 7,
        nombre: "Poleron Julie",
        precio: 28000,
        imagen: poleron,
        descripcion: "Polerón abrigado de tejido suave, ideal para los días fríos.",
        stock: 9,
        categoria: "abrigos",
    },
    {
        id: 8,
        nombre: "Sweater Tabata",
        precio: 21000,
        imagen: sweaterCuadrille,
        descripcion: "Sweater tejido con diseño clásico y textura confortable.",
        stock: 6,
        categoria: "abrigos",
    },
    {
        id: 9,
        nombre: "Sweater Star",
        precio: 29000,
        imagen: sweaterEstrella,
        descripcion: "Sweater con estampa de estrellas, cómodo y súper abrigado.",
        stock: 5,
        categoria: "abrigos",
    },
    {
        id: 10,
        nombre: "Sweater Ellis",
        precio: 29000,
        imagen: sweaterOchos,
        descripcion: "Sweater tejido con diseño de ochos y terminación premium.",
        stock: 8,
        categoria: "abrigos",
    },
    {
        id: 11,
        nombre: "Sweater Boyd",
        precio: 29000,
        imagen: sweaterRayado,
        descripcion: "Sweater rayado de excelente calidad, ideal para uso diario.",
        stock: 4,
        categoria: "abrigos",
    },
    {
        id: 12,
        nombre: "Vestido Shine",
        precio: 40000,
        imagen: vdoBrillos,
        descripcion: "Vestido con detalles brillantes, ideal para eventos especiales.",
        stock: 2,
        categoria: "vestidos",
    },
    {
        id: 13,
        nombre: "Vestido Victoria",
        precio: 30000,
        imagen: vdoHombreras,
        descripcion: "Vestido con hombreras y diseño elegante para cualquier ocasión.",
        stock: 5,
        categoria: "vestidos",
    },
    {
        id: 14,
        nombre: "Vestido Celine",
        precio: 38000,
        imagen: vdoNegrof,
        descripcion: "Vestido sofisticado con cuello destacado y excelente calce.",
        stock: 3,
        categoria: "vestidos",
    },
    {
        id: 15,
        nombre: "Vestido Real",
        precio: 41000,
        imagen: vdoRealf,
        descripcion: "Vestido largo de diseño exclusivo y terminaciones de alta calidad.",
        stock: 2,
        categoria: "vestidos",
    }
];
export default productos;