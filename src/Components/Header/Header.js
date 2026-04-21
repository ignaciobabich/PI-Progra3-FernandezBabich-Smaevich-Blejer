import React, { Component } from 'react';
import Favoritos from '../../Screens/Favoritos/Favoritos';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Header(props){
    let usuario= cookies.get("sesion")
        return (
            <React.Fragment>
            <div className="container">
            <h1>UdeSA Movies</h1>
            <nav>
                <ul className="nav nav-tabs my-4">
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/sectionpelis">Peliculas</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/tvshows">Series</Link>
                    </li>
                    {usuario ? (
                        <>
                        <li className="nav-link">
                        <Link to="/favoritos">Favoritos</Link>
                        </li>
                        <li className="nav-link">
                        <Link to="/logout">LogOut</Link>
                        </li>
                        </>
                    ) : (
                        <>
                        <li className="nav-item ml-auto">
                        <Link to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login">Login</Link>
                        </li>
                        </>
                    )}
                </ul>
            </nav>
            </div>
            </React.Fragment>

        )
    }



export default Header;