import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class LogOut extends Component{
    componentDidMount(){
        cookies.remove("sesion")
        localStorage.removeItem("usuarios")
        this.props.history.push("/");
    }
    render(){
        return null;
    }
}

export default LogOut