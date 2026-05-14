import React, { useState, useEffect } from "react";  


function CardsForTVShows (props) {
    const [textoBoton, setTextoboton]= useState("Ver mas")
    const [ClaseOculta, setClaseOculta]= useState("oculta")
            
    function cambiarEstado() {
        if(textoBoton === "Ver Mas"){
            {
                setTextoboton ("Ver Menos"),
                setClaseOculta("") 
            }
        }
        else{
            {
                setTextoboton("Ver Mas"),
                setClaseOculta ("oculta")
            }
        }
    }

    
        return(
            <article class="single-card-movie"> 
                <img src= {'https://image.tmdb.org/t/p/w342/' + props.imagen} class="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{props.nombre}</h5>
                    <button className='more' onClick={() => cambiarEstado()}>{textoBoton}</button>
                        <section className='extra'>
                            <a href="Detalle.js" className={ClaseOculta}>{props.descripcion}</a>
                        </section>
                    <a href="" class="btn alert-primary">🩶</a>
                </div>
                </article>
        )
    
}


export default CardsForTVShows