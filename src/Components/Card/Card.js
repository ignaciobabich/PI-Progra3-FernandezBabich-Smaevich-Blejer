import React, { Component } from "react";  
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Card.css"

class Card extends Component {
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
                ClaseOculta: ""
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
        if(this.setState.Favoritos === "🩶"){
            this.setState({
                Favoritos: "♥️"
            })
        }
    }

    render() {
        return(
            <article class="single-card-movie">
                <img src= {'https://image.tmdb.org/t/p/w342/' + this.props.imagen} class="card-img-top" alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.nombre}</h5>
                    <button className='more' onClick={() => this.cambiarEstado()}> {this.state.textoBoton} </button>
                        <section className='extra'>
                          <p className="card -text"> {this.props.descripcion} </p> 
                        </section>
                    <button onClick={() => this.cambiarEstadoFav()}> {this.state.Favoritos} </button>
                </div>
                </article>
        )
    }
}

export default Card;