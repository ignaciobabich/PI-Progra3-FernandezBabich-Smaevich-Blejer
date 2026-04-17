import React from "react";
import {Link} from "react-router-dom";


function NotFound(){
    return(
       <div ClassName= "cards cardBody">
        <h1>404 - contenido inexistente</h1>
        <Link to="/"></Link>
       </div> 
    )
}

export default NotFound;