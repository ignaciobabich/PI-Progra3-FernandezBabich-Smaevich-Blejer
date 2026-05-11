import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import Cookies from "universal-cookie";
import Loader from "../../Components/Loader/Loader";

const cookies = new Cookies();

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: [],
            cargando: true
        }
    }

    componentDidMount() {
        if (!cookies.get('sesion')) {
            this.props.history.push('/');
            return;
        }
        this.cargarPeliculasFavoritas();
        this.cargarSeriesFavoritas();
    }

    cargarPeliculasFavoritas() {
        const storagePeliculas = localStorage.getItem("favoritos-peliculas");
        const peliculasGuardadas = storagePeliculas ? JSON.parse(storagePeliculas) : [];

        peliculasGuardadas.map((id) => {
            fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
                .then((response) => response.json())
                .then((info) => {
                    this.setState({
                        peliculasFavoritas: this.state.peliculasFavoritas.concat(info),
                        cargando: false
                    })
                })
                .catch((error) => console.log(error))
        });

        if (peliculasGuardadas.length === 0) {
            this.setState({ cargando: false });
        }
    }

    cargarSeriesFavoritas() {
        const storageSeries = localStorage.getItem("favoritos-series");
        const seriesGuardadas = storageSeries ? JSON.parse(storageSeries) : [];

        seriesGuardadas.map((id) => {
            fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
                .then((response) => response.json())
                .then((info) => {
                    this.setState({
                        seriesFavoritas: this.state.seriesFavoritas.concat(info)
                    })
                })
                .catch((error) => console.log(error))
        });
    }

    eliminarFavorito(id, tipo) {
        const tipoStorage = tipo === 'tv' ? 'favoritos-series' : 'favoritos-peliculas';
        let guardados = JSON.parse(localStorage.getItem(tipoStorage)) || [];
        let guardadosFiltrados = guardados.filter(function(favId) {
            return favId !== id;
        });
        localStorage.setItem(tipoStorage, JSON.stringify(guardadosFiltrados));

        if (tipo === 'tv') {
            let seriesFiltradas = this.state.seriesFavoritas.filter(function(serie) {
                return serie.id !== id;
            });
            this.setState({ seriesFavoritas: seriesFiltradas });
        } else {
            let peliculasFiltradas = this.state.peliculasFavoritas.filter(function(peli) {
                return peli.id !== id;
            });
            this.setState({ peliculasFavoritas: peliculasFiltradas });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h2 className="alert alert-primary">Mis Favoritos</h2>

                    {this.state.cargando ? (<Loader />) : (
                        <React.Fragment>
                            <h2 className="alert alert-primary">Películas favoritas</h2>
                            <section className="row cards" id="movies">
                                {this.state.peliculasFavoritas.length === 0 ? (
                                    <p>No tenés películas favoritas guardadas.</p>
                                ) : (
                                    this.state.peliculasFavoritas.map((peli) =>
                                        <div key={peli.id}>
                                            <Card className="single-card-movie"
                                                id={peli.id}
                                                tipo="movie"
                                                nombre={peli.title}
                                                imagen={peli.poster_path}
                                                descripcion={peli.overview}
                                            />
                                            <button
                                                class=""
                                                onClick={() => this.eliminarFavorito(peli.id, 'movie')}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    )
                                )}
                            </section>

                            <h2 className="alert alert-primary">Series favoritas</h2>
                            <section className="row cards" id="movies">
                                {this.state.seriesFavoritas.length === 0 ? (
                                    <p>No tenés series favoritas guardadas.</p>
                                ) : (
                                    this.state.seriesFavoritas.map((serie) =>
                                        <div key={serie.id}>
                                            <Card className="single-card-movie"
                                                id={serie.id}
                                                tipo="tv"
                                                nombre={serie.name}
                                                imagen={serie.poster_path}
                                                descripcion={serie.overview}
                                            />
                                            <button
                                                class=""
                                                onClick={() => this.eliminarFavorito(serie.id, 'tv')}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    )
                                )}
                            </section>
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default Favoritos;
