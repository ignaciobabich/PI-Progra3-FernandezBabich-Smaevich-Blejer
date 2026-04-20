import React, { Component } from "react";
import CardDetalle from '../../Components/CardDetalle/CardDetalle'

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            cargando: true
        };
    }

    componentDidMount() {

        const tipo = this.props.match.params.tipo;
        const id = this.props.match.params.id;

        fetch('https://api.themoviedb.org/3/${tipo}/${id}?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
            .then(response => response.json())
            .then(data => {this.setState ({
                    peliculas: data,
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
        {this.state.cargando ? (<h3>Cargando...</h3>) : (
            <CardDetalle
              key={this.state.peliculas.id}
              id={this.state.peliculas.id}
              tipo = {tipo}
              nombre={tipo === "movie" ? this.state.peliculas.title : this.state.item.name}
              imagen={this.state.peliculas.poster_path}
              descripcion={this.state.peliculas.overview}
              date={tipo === "movie" ? this.state.peliculas.release_date : this.state.peliculas.first_air_date}
              puntuacion={this.state.peliculas.vote_average}
              duracion = {this.state.peliculas.runtime}
              generos={this.state.peliculas.genres}
            />
          
        )}
      </section>
      </React.Fragment>
    )}



}

export default Detalle;



