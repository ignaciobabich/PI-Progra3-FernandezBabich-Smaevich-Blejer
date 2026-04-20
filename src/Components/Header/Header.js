import React, { Component } from 'react';
import Favoritos from '../../Screens/Favoritos/Favoritos';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sesion: false

        };
    }

    cambiarEstado() {
        if(this.state.sesion === false) {
            this.setState({
                sesion: true
            })
        }
        else{
            this.setState({
                sesion: false
            })
        }
    }

    render() {
        return (
            <React.Fragment>
            <h1>UdeSA Movies</h1>
            <nav>
                <ul className="nav nav-tabs my-4">
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/peliculas">Peliculas</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/series">Series</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                    <li className="nav-item ml-auto">
                        <Link to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            </React.Fragment>

        )
    }
}

export default Header;