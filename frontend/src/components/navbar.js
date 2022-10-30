import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <h2 className="navbar-title-link"><Link to="/">Chillona</Link></h2>
                <div className="navbar-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/quiz">Cuestionario</Link>
                    <Link to="/create">Crear</Link>
                    <Link to="/articles">Artículos</Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;