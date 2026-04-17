import React, { Component } from "react";
import Card from "../Card/Card";


class TVShows extends Component {
    constructor() {
        super();
        this.state = {
            peliculas: [

            ]
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
            .then(response => response.json())
            .then(data => {this.setState ({
                    peliculas: data.results.slice(0,4)
                });
            })
            .catch((error) => console.log(error));
    }

   

    render() {
    return (
      <>
      <h2 className="alert alert-primary">Popular TVShows this week</h2>
        <section className="cards">
        
        {this.state.peliculas.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.peliculas.map((peli) => 
            <Card
              key={peli.id}
              id={peli.id}
              nombre={peli.name}
              imagen={peli.poster_path}
              descripcion={peli.overview}
            />
          )
        )}
        </section>
      </>
    );}



}

export default TVShows;