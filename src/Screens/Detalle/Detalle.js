import React, { Component } from "react";
import CardDetalle from '../../Components/CardDetalle/CardDetalle';
import Loader from "../../Components/Loader/Loader";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            cargando: true
        };
    }

    componentDidMount() {
        const tipo = this.props.match.params.tipo;
        const id = this.props.match.params.id;

        fetch('https://api.themoviedb.org/3/' + tipo + '/' + id + '?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    item: data,
                    cargando: false
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        const tipo = this.props.match.params.tipo;

        return (
            <React.Fragment>
                <section className="cards" id="movies">
                    {this.state.cargando ? (<Loader />) : (
                        <CardDetalle
                            key={this.state.item.id}
                            id={this.state.item.id}
                            tipo={tipo}
                            nombre={tipo === "movie" ? this.state.item.title : this.state.item.name}
                            imagen={this.state.item.poster_path}
                            descripcion={this.state.item.overview}
                            date={tipo === "movie" ? this.state.item.release_date : this.state.item.first_air_date}
                            puntuacion={this.state.item.vote_average}
                            duracion={this.state.item.runtime}
                            generos={this.state.item.genres}
                        />
                    )}
                </section>
            </React.Fragment>
        )
    }
}

export default Detalle;
