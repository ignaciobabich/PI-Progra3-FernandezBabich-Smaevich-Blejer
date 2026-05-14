import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function TVShows () {
   const [peliculas, setPeliculas]= useState([])

    useEffect(()=> {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
            .then(response => response.json())
            .then(data => {
                setPeliculas(data.results.slice(0, 4)
                )
            })
            .catch((error) => console.log(error));
    }, [])


        return (
            <>
                <div className="alert alert-primary">
                    <h2 className="alert alert-primary">Series populares</h2>
                    <Link to="/tvshows" >Ver todas</Link>
                </div>
                <section className="row cards" id="movies">
                    {peliculas.length === 0 ? (
                        <Loader />
                    ) : (
                        peliculas.map((peli) =>
                            <Card className="single-card-movie"
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


export default TVShows;
