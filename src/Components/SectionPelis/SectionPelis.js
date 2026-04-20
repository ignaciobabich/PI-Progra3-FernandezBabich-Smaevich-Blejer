import React, { Component } from "react";
import Card from "../Card/Card";


class SectionPelis extends Component {
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
                    peliculas: data.results.slice(0,4)
                });
            })
            .catch((error) => console.log(error));
    }

   

    render() {
    return (
      <React.Fragment>
      
        <h2 className="alert alert-primary">Peliculas divertidas</h2>
        <section className="cards" id="movies">
        {this.state.peliculas.length === 0 ? (<h3>Cargando...</h3>) : (
             this.state.peliculas.map((peli) => 
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
      </React.Fragment>
    )}



}

export default SectionPelis;



