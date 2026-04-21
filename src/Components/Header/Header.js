import React, { Component } from 'react';
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

    componentDidMount() {
        if (cookies.get('sesion')) {
            this.setState({ sesion: true });
        }
    }

    render() {
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
                    {this.state.sesion === false &&
                        <li className="nav-item ml-auto">
                            <Link to="/register">Crear Cuenta</Link>
                        </li>
                    }
                    {this.state.sesion === false &&
                        <li className="nav-item">
                            <Link to="/login">Login</Link>
                        </li>
                    }
                    {this.state.sesion === true &&
                        <li className="nav-link">
                            <Link to="/favoritos">Favoritos</Link>
                        </li>
                    }
                    {this.state.sesion === true &&
                        <li className="nav-item ml-auto">
                            <Link to="/logout">Cerrar sesion</Link>
                        </li>
                    }
                </ul>
            </nav>
            </div>
            </React.Fragment>
        )
    }
}

export default Header;
