import React, { Component } from 'react';


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

    //TERMINAR LA SEMANA QUE VIENE QUE VEMOS COMO HACER LO DE LAS COOKIES CON EL FORMS LOGIN.

    render() {
        return (
            <React.Fragment>
            <h1>UdeSA Movies</h1>
            <nav>
                <ul className="nav nav-tabs my-4">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="movies.html">Películas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="series.html">Series</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="favorites.html">Favoritas</a>
                    </li>
                    <li className="nav-item ml-auto">
                        <a className="nav-link" href="register.html">Registro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="login.html">Login</a>
                    </li>
                </ul>
            </nav>
            </React.Fragment>

        )
    }
}

export default Header;