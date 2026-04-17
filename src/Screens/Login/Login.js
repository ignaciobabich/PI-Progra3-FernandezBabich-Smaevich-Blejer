import React, { Component } from "react";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'', contraseña:'',
            error: ''
        }
    }

evitarSubmit(event){
    event.preventDefault();
}


controlarCambios(event, campo){
    this.setState({
        [campo]:event.target.value
        })
}

render(){
    return(
        <form onSubmit={(event)=> this.evitarSubmit(event)}>

        </form>
    )
}

// render(){
//     return(
//         <ReactFragment>
//             <div class="row justify-content-center">
//             <div class="col-md-6">
//                 <form>
//                     <div class="form-group">
//                         <label for="email">Email</label>
//                         <input type="email" class="form-control" id="email" placeholder="Ingresá tu email"/>
//                     </div>
//                     <div class="form-group">
//                         <label for="password">Contraseña</label>
//                         <input type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña"/>
//                     </div>
//                     <button type="submit" class="btn btn-primary btn-block">Iniciar sesión</button>
//                 </form>
//                 <p class="mt-3 text-center">¿No tenés cuenta? <a href="register.html">Registrarse</a></p>
//             </div>
//         </div>
//         </ReactFragment>
//     )
//}



}

export default Login