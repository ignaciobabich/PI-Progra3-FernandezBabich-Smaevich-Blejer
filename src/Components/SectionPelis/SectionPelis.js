import React, { Component } from "react";
import RMcard from "../Card/Card";


class SeccionRM extends Component {
    constructor() {
        super();
        this.state = {
            peliculas: [

            ]
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
            .then(response => response.json())
            .then(data => {this.setState ({
                    peliculas: data.results
                });
            })
            .catch((error) => console.log(error));
    }

   

    render() {
    return (
      <section className="card-container">
        {this.state.peliculas.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.peliculas.map((peli) => 
            <Card
              key={peli.id}
              id={peli.id}
              nombre={peli.title}
              imagen={peli.poster_path}
              descripcion={peli.overview}
            />
          )
        )}
      </section>
    );}



}



