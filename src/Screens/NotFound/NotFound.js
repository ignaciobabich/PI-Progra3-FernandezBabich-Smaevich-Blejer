import React from "react";
import {Link} from "react-router-dom";

function NotFound(){
    return(
       <div className= "cards cardBody">
        <h1>404 - contenido inexistente</h1>
        <Link to="/">Volver al inicio</Link>
       </div> 
    )
}

export default NotFound;
