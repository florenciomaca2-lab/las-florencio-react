import CartWidget from "./CartWidget"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-bordo navbar-dark shadow-sm">
            <div className="container-fluid">
                <a className="navbar-bran" href="#">
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

                        <li className="nav-item">
                            <a className="nav-link" href="#">Pantalones</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Remeras</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Vestidos</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Abrigos</a>
                        </li>

                    </ul>

                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;