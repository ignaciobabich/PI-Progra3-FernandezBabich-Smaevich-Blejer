import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Header () {
    const [sesion, setSesion] = useState (false)
         
    useEffect(()=> {
        if (cookies.get('sesion')) {
            setSesion( true );
        }
    }, [])

    
        return (
            <React.Fragment>
            <div className="container">
            <h1>UdeSA Movies</h1>
            <nav>
                <ul className="nav nav-tabs my-4">
                    <li className="nav-item">
                        <Link  className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to="/sectionpelis">Peliculas</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to="/tvshows">Series</Link>
                    </li>
                    {sesion === false &&
                        <li className="nav-item ml-auto">
                            <Link className="nav-link" to="/register">Crear Cuenta</Link>
                        </li>
                    }
                    {sesion === false &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    }
                    {sesion === true &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/favoritos">Favoritos</Link>
                        </li>
                    }
                    {sesion === true &&
                        <li className="nav-item ml-auto">
                            <Link className="nav-link"  to="/logout">Cerrar sesion</Link>
                        </li>
                    }
                </ul>
            </nav>
            </div>
            </React.Fragment>
        )

}
export default Header
