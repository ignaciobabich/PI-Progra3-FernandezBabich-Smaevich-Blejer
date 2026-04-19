import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookies from "universal-cookie"

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
    const usuarioG = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioV = usuarioG.find(
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
         <ReactFragment>
             <div className="row justify-content-center">
             <div className="col-md-6">
                 <form onSubmit={(event) => this.inicioSesion(event)}>
                     <div className="form-group">
                         <label for="email">Email</label>
                         <input type="email" class="form-control" id="email" placeholder="Ingresá tu email" value={this.state.email}
                         onChange={(event) => this.controlarCambios(event, "email")}/>
                     </div>
                     <div class="form-group">
                         <label for="password">Contraseña</label>
                         <input type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña" value={this.state.contraseña}
                         onChange={(event) =>this.controlarCambios(event, "contraseña")}/>
                     </div>
                     <button type="submit" class="btn btn-primary btn-block">Iniciar sesión</button>
                 </form>
                 <p class="mt-3 text-center">¿No tenés cuenta? <Link to="/Register" >Registrese</Link></p>
             </div>
         </div>
         </ReactFragment>
     )
}

}

export default Login