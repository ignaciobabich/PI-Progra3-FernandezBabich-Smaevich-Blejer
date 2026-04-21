import React, { Component } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

class TVShows extends Component {
    constructor() {
        super();
        this.state = {
            peliculas: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peliculas: data.results.slice(0, 4)
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="alert alert-primary mb-0">Series populares</h2>
                    <Link to="/tvshows" className="btn btn-outline-primary btn-sm">Ver todas</Link>
                </div>
                <section className="cards">
                    {this.state.peliculas.length === 0 ? (
                        <Loader />
                    ) : (
                        this.state.peliculas.map((peli) =>
                            <Card
                                key={peli.id}
                                id={peli.id}
                                tipo="tv"
                                nombre={peli.name}
                                imagen={peli.poster_path}
                                descripcion={peli.overview}
                            />
                        )
                    )}
                </section>
            </>
        );
    }
}

export default TVShows;
