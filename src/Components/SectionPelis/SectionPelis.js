import React, { Component } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

class SectionPelis extends Component {
    constructor() {
        super();
        this.state = {
            peliculas: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
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
            <React.Fragment>
                <div className="">
                    <h2 className="alert alert-primary mb-0">Peliculas en cartel</h2>
                    <Link to="/sectionpelis" className="btn btn-outline-primary btn-sm">Ver todas</Link>
                </div>
                <section className="cards" id="movies">
                    {this.state.peliculas.length === 0 ? (<Loader />) : (
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
        )
    }
}

export default SectionPelis;
