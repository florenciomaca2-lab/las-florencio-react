import "./Navbar.css";
import CartWidget from "./CartWidget"

const categorias = [
    "Pantalones",
    "Remeras",
    "Vestidos",
    "Abrigos",
];

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-bordo navbar-dark shadow-sm">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">
                    HOME
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
               
                <div className="collapse navbar-collapse" id="navbarNav">
                   
                    <ul className="navbar-nav me-auto">
                        {categorias.map((categoria) => (
                            <li key={categoria} className="nav-item">
                                <a className="nav-link" href="#">
                                    {categoria}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;