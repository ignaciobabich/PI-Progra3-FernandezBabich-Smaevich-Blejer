import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie"

const cookies = new Cookies();

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'', contraseña:'',
            error: ''
        }
    }

controlarCambios(event, campo){
    this.setState({
        [campo]:event.target.value
        })
}

inicioSesion(event){
    event.preventDefault();
    let usuarioG = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioV = usuarioG.find(
        (usuarios) => usuarios.email === this.state.email && usuarios.contraseña === this.state.contraseña
    );
    if (usuarioV){
        cookies.set("sesion", this.state.email, {path: "/"})
        this.props.history.push("/");
    }  else{
        this.setState({error: 'credenciales incorrectas'});
    }  
}

 render(){
     return(
         <>
         <h2 className="alert alert-primary">Iniciar sesion</h2>

             <div className="row justify-content-center">
             <div className="col-md-6">
                 <form onSubmit={(event) => this.inicioSesion(event)}>
                     <div className="form-group">
                         <label htmlFor="email">Email</label>
                         <input type="email" className="form-control" id="email" placeholder="Ingresá tu email" value={this.state.email}
                         onChange={(event) => this.controlarCambios(event, "email")}/>
                     </div>
                     <div className="form-group">
                         <label htmlFor="password">Contraseña</label>
                         <input type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña" value={this.state.contraseña}
                         onChange={(event) =>this.controlarCambios(event, "contraseña")}/>
                     </div>
                     <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                 </form>
                 <p className="mt-3 text-center">¿No tenés cuenta? <Link to="/register" >Registrese</Link></p>
             </div>
         </div>
         </>
     )
}

}

export default Login