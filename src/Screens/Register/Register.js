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

render() {
    return (
        <React.Fragment>
        <h2 class="alert alert-primary">Registro</h2>

        <div class="row justify-content-center">
            <div class="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingresá tu email"/>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña"/>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
                </form>
                <p class="mt-3 text-center">¿Ya tenés cuenta? <Link to="/Login">Inicie sesion</Link></p>
            </div>
        </div>
        </React.Fragment>
    )
}

}

export default Register;