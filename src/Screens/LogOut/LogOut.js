import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class LogOut extends Component {
    componentDidMount() {
        cookies.remove('sesion');
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <p>Cerrando sesión...</p>
            </div>
        )
    }
}

export default LogOut;
