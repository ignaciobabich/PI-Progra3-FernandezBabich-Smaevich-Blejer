import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Register extends Component{
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

    registUsuario(event){
        event.preventDefault();
    
    if (this.state.contraseña.length < 6){
        this.setState({mensaje: "la clave tiene que contener al menos 6 caracteres"})
        return;
    }
       
    let usuarioG = JSON.parse(localStorage.getItem("usuarios")) || [];

    let existe = usuarioG.find(
        (usuarios) => usuarios.email === this.state.email
    );

    if (existe){
        this.setState({mensaje: "Este email ya existe"})
        return;
    }

    let usuarioNuevo = {
        email : this.state.email,
        contraseña : this.state.contraseña
    };

    usuarioG.push(usuarioNuevo);
    localStorage.setItem("usuarios", JSON.stringify(usuarioG));

    this.props.history.push("/login");
}   

    render() {
    return (
        <React.Fragment>
        <h2 className="alert alert-primary">Registro</h2>

        <div className="row justify-content-center">
            <div className="col-md-6">
                <form onSubmit={(event) => this.registUsuario(event)}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingresá tu email" value={this.state.email}
                        onChange={(event) =>this.controlarCambios(event, "email")}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" id="password" placeholder="Ingrese minimo 6 caracteres" value={this.state.contraseña}
                        onChange={(event) => this.controlarCambios(event, "contraseña")}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                </form>
                <p class="mt-3 text-center">¿Ya tenés cuenta? <Link to="/login">Iniciar sesion</Link></p>
            </div>
        </div>
        </React.Fragment>
    )
}

}

export default Register;