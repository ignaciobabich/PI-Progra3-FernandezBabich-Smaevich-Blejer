import React, { Component } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class CardDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Favoritos: "🩶"
        };
    }

    cambiarEstadoFav() {
        if (this.state.Favoritos === "🩶") {
            this.setState({ Favoritos: "♥️" });
            this.agregarAFavoritos(this.props.id);
        } else {
            this.setState({ Favoritos: "🩶" });
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

        return (
            <div className="container">
                <h2 class="alert alert-primary">{this.props.nombre}</h2>

                <section class="row">
                    <img class="col-md-6" src={'https://image.tmdb.org/t/p/w342/' + this.props.imagen} alt/>
                    <section class="col-md-6 info">
                        <h3>Descripcion</h3>
                        <p class="description">{this.props.descripcion}</p>
                        <p clas="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.props.date}</p>
                        <p clas="mt-0 mb-0"><strong>Puntuacion:</strong> {this.props.puntuacion}</p>
                        {this.props.duracion &&
                            <p clas="mt-0 mb-0"><strong>Duracion:</strong> {this.props.duracion} min</p>
                        }
                        {this.props.generos &&
                            <p clas="mt-0 mb-0"><strong>Genero:</strong> {this.props.generos.map((genero) => genero.name + ' ')}</p>
                        }
                        {tieneSesion &&
                            <button onClick={() => this.cambiarEstadoFav()}>{this.state.Favoritos}</button>
                        }
                    </section>
                </section>
            </div>
        )
    }
}

export default CardDetalle;
