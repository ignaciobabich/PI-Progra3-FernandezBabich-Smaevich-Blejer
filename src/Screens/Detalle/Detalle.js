import React, { Component } from "react";
import CardDetalle from '../../Components/CardDetalle/CardDetalle'

class Detalle extends Component {
    constructor() {
        super();
        this.state = {
            peliculas: [

            ]
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
            .then(response => response.json())
            .then(data => {this.setState ({
                    peliculas: data.results.slice(0,1)
                });
            })
            .catch((error) => console.log(error));
    }

   

    render() {
    return (
      <React.Fragment>
      
        <h2 className="alert alert-primary">Popular movies this week</h2>
        <section className="cards" id="movies">
        {this.state.peliculas.length === 0 ? (<h3>Cargando...</h3>) : (
             this.state.peliculas.map((peli) => 
            <CardDetalle
              key={peli.id}
              id={peli.id}
              nombre={peli.title}
              imagen={peli.poster_path}
              descripcion={peli.overview}
              date={peli.release_date}
              puntuacion={peli.vote_average}
            />
          )
        )}
      </section>
      </React.Fragment>
    )}



}

export default Detalle;



