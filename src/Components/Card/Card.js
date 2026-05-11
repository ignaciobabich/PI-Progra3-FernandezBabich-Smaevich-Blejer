import React, { Component } from "react";
import "./Card.css";
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoBoton: "Ver Mas",
            ClaseOculta: "oculta",
            Favoritos: "🩶"
        };
    }

    cambiarEstado() {
        if (this.state.textoBoton === "Ver Mas") {
            this.setState({
                textoBoton: "Ver Menos",
                ClaseOculta: "abierta"
            })
        } else {
            this.setState({
                textoBoton: "Ver Mas",
                ClaseOculta: "oculta"
            })
        }
    }

    cambiarEstadoFav() {
        if (this.state.Favoritos === "🩶") {
            this.setState({ Favoritos: "♥️" })
            this.agregarAFavoritos(this.props.id);
        } else {
            this.setState({ Favoritos: "🩶" })
            this.quitarDeFavoritos(this.props.id);
        }
    }

    agregarAFavoritos(id) {
        const tipoStorage = this.props.tipo === 'tv' ? 'favoritos-series' : 'favoritos-peliculas';
        let favoritos = localStorage.getItem(tipoStorage);
        let favoritosAgregados = favoritos ? JSON.parse(favoritos) : [];
        favoritosAgregados.push(id);
        localStorage.setItem(tipoStorage, JSON.stringify(favoritosAgregados));
    }

    quitarDeFavoritos(id) {
        const tipoStorage = this.props.tipo === 'tv' ? 'favoritos-series' : 'favoritos-peliculas';
        let favoritos = localStorage.getItem(tipoStorage);
        let favoritosAgregados = favoritos ? JSON.parse(favoritos) : [];
        let favoritosFiltrados = favoritosAgregados.filter(function(favId) {
            return favId !== id;
        });
        localStorage.setItem(tipoStorage, JSON.stringify(favoritosFiltrados));
    }

    render() {
        const tieneSesion = cookies.get('sesion') ? true : false;
        const rutaDetalle = this.props.tipo === 'tv'
            ? '/detalle/tv/' + this.props.id
            : '/detalle/movie/' + this.props.id;

        return (
            <article class="single-card-movie">
                <img src={'https://image.tmdb.org/t/p/w342/' + this.props.imagen} class="card-img-top" alt=""/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.nombre}</h5>
                    <button className='more'>
                        <Link to={rutaDetalle}>Ver detalle</Link>
                    </button>
                    <button className='more' onClick={() => this.cambiarEstado()}>{this.state.textoBoton}</button>
                    <section className={`extra ${this.state.ClaseOculta}`}>
                        <a className={this.state.ClaseOculta}>{this.props.descripcion}</a>
                    </section>
                    {tieneSesion && (
                        <button onClick={() => this.cambiarEstadoFav()}>{this.state.Favoritos}</button>
                    )}
                </div>
            </article>
        )
    }
}

export default Card;
