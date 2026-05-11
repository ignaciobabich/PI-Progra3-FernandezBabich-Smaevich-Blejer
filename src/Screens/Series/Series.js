import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import Loader from "../../Components/Loader/Loader";

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            pagina: 1,
            filtro: '',
            cargando: true
        }
    }

    componentDidMount() {
        this.cargarSeries(1);
    }

    cargarSeries(pagina) {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=6ee91af43dc9c7cc853f7185e80bbf53&page=' + pagina)
            .then(response => response.json())
            .then(data => {
                let listaNueva = this.state.series.concat(data.results);
                this.setState({
                    series: listaNueva,
                    pagina: pagina,
                    cargando: false
                });
            })
            .catch((error) => console.log(error));
    }

    cargarMas() {
        this.cargarSeries(this.state.pagina + 1);
    }

    controlarCambios(event) {
        this.setState({ filtro: event.target.value });
    }

    render() {
        let seriesFiltradas = this.state.series.filter(function(serie) {
            return serie.name.toLowerCase() === this.state.filtro.toLowerCase() || this.state.filtro === '';
        }.bind(this));

        return (
            <React.Fragment>
                <h2 className="alert alert-primary">Series populares</h2>
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
                            seriesFiltradas.map((serie) =>
                                <Card
                                    key={serie.id}
                                    id={serie.id}
                                    tipo="tv"
                                    nombre={serie.name}
                                    imagen={serie.poster_path}
                                    descripcion={serie.overview}
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

export default Series;
