import React, { Component } from "react";  
//import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Card.css";
import {Link} from 'react-router-dom';
import Detalle from '../../Screens/Detalle/Detalle';


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

     agregarAFavoritos(id){
        let favoritos = localStorage.getItem("favoritos-peliculas");
        let favoritosagregados = favoritos ? JSON.parse(favoritos) : [];

        favoritosagregados.push(id);
        localStorage.setItem("favoritos-peliculas", JSON.stringify(favoritosagregados));
     }

    render(){
        return(
            <article class="single-card-movie">
                <img src= {'https://image.tmdb.org/t/p/w342/' + this.props.imagen} class="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.nombre}</h5>
                    <button className='more' >  <Link to= {"/detalle/"+ this.props.id} > Ver detalle </Link></button>
                        <section className={`extra ${this.state.ClaseOculta}`}>
                          
                        </section>
                    <button onClick={() => this.cambiarEstadoFav()}> {() => this.state.Favoritos()} {() => this.agregarAFavoritos(this.props.id)}</button>

                    <button className='more' onClick={() => this.cambiarEstado()}>{this.state.textoBoton}</button>
                        <section className='extra'>
                            <a href="Detalle.js" className={this.state.ClaseOculta}>{this.props.descripcion}</a>
                        </section>
                        
                    <button onClick={() => this.cambiarEstadoFav()}> {this.state.Favoritos} </button>
                </div>
                </article>
        )
    }
}



export default Card;