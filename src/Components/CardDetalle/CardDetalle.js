import React, { Component } from "react";  
//import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {Link} from 'react-router-dom';
import Detalle from '../../Screens/Detalle/Detalle';


class CardDetalle extends Component {
    constructor(props){
        super(props);
        this.state = {
            textoBoton: "Ver Mas",
            ClaseOculta: "oculta",
            Favoritos: "🩶"
        };
    }

    cambiarEstado() {
        if(this.state.textoBoton === "Ver Mas"){
            this.setState({
                textoBoton: "Ver Menos",
                ClaseOculta: "abierta"
            })
        }
        else{
            this.setState({
                textoBoton:"Ver Mas",
                ClaseOculta: "oculta"
            })
        }
    }

    cambiarEstadoFav() {
        if(this.state.Favoritos === "🩶"){
            this.setState({
                Favoritos: "♥️"
            })
        } else {
                this.setState({Favoritos: "🩶"})
            }
        }


    render(){
        return(
            <div>
                <h2 class="alert alert-primary">{this.props.nombre}</h2>

            <section class= "row">
                <img class="col-md-6" src= {'https://image.tmdb.org/t/p/w342/' + this.props.imagen}  alt/>
                <section class="col-md-6 info">
                    <h3>Descripcion</h3>
                    <p class="description"> {this.props.descripcion} </p> 
                    <p clas="mt-0 mb-0" id="release-date"> <strong>Fechas de estreno:</strong> {this.props.date} </p>
                    <p clas="mt-0 mb-0 length"> <strong>puntuacion:</strong> {this.props.puntuacion} </p>

                </section>
            </section>
            </div>
        )
    }
}

export default CardDetalle;