import CartWidget from "./CartWidget"

function Navbar() {
    return (
        <nav>
            <h2>Las Florencio</h2>

            <ul>
                <li>Inicio</li>
                <li>Pantalones</li>
                <li>Remeras</li>
                <li>Vestidos</li>
                <li>Abrigos</li>
            </ul>        

            <CartWidget />
        </nav>
    )
}

export default Navbar