import React from "react";
import CartWidget from "./CartWidget";


const Navbar = () => {
    return (
    <div>
        <div className="_Welcome">
            <h5 className="Welcome">¡Bienvenidos!</h5>
        </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">SerHuella <span className="Rallita">|</span> digital agency. </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li clasNames="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <CartWidget/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>






    </div> 

    );

};

export default Navbar;