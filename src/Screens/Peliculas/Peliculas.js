import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import Loader from "../../Components/Loader/Loader";

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            pagina: 1,
            filtro: '',
            cargando: true
        }
    }

    componentDidMount() {
        this.cargarPeliculas(1);
    }

    cargarPeliculas(pagina) {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6ee91af43dc9c7cc853f7185e80bbf53&page=' + pagina)
            .then(response => response.json())
            .then(data => {
                let listaNueva = this.state.peliculas.concat(data.results);
                this.setState({
                    peliculas: listaNueva,
                    pagina: pagina,
                    cargando: false
                });
            })
            .catch((error) => console.log(error));
    }

    cargarMas() {
        this.cargarPeliculas(this.state.pagina + 1);
    }

    controlarCambios(event) {
        this.setState({ filtro: event.target.value });
    }

    render() {
        let peliculasFiltradas = this.state.peliculas.filter(function(peli) {
            return peli.title.toLowerCase() === this.state.filtro.toLowerCase() || this.state.filtro === '';
        }.bind(this));

        return (
            <React.Fragment>
                <h2 className="alert alert-primary">Peliculas en cartel</h2>
                <div className="container">
                    <form className="filter-form mb-3">
                        <input
                            type="text"
                            placeholder="Filtrar por nombre..."
                            value={this.state.filtro}
                            onChange={(event) => this.controlarCambios(event)}
                        />
                    </form>
                    <section className="cards all-movies">
                        {this.state.cargando ? (
                            <Loader />
                        ) : (
                            peliculasFiltradas.map((peli) =>
                                <Card
                                    key={peli.id}
                                    id={peli.id}
                                    tipo="movie"
                                    nombre={peli.title}
                                    imagen={peli.poster_path}
                                    descripcion={peli.overview}
                                />
                            )
                        )}
                    </section>
                    <div className="text-center my-3">
                        <button className="btn btn-primary" onClick={() => this.cargarMas()}>
                            Cargar mas
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Peliculas;
