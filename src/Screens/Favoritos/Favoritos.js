import React,{Component} from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

class Favoritos extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: []
        }
    }

    componentDidMount(){
        this.cargarPeliculasFavoritas();
        this.cargarSeriesFavoritas();
    }

    cargarPeliculasFavoritas(){
        const storagePeliculas = localStorage.getItem("favoritos-peliculas");
        const peliculasGuardadas = storagePeliculas ? JSON.parse(storagePeliculas) : [];

        peliculasGuardadas.map((id) => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6ee91af43dc9c7cc853f7185e80bbf53`)
                .then((response) => response.json())
                .then((info) => {
                    this.setState({
                        peliculasFavoritas: [...this.state.peliculasFavoritas, info]
                    })
                })
                .catch((error) => console.log(error))
        });
    }

    cargarSeriesFavoritas(){
        const storageSeries = localStorage.getItem("favoritos-series");
        const seriesGuardadas = storageSeries ? JSON.parse(storageSeries) : [];

        seriesGuardadas.map((id) => {
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=6ee91af43dc9c7cc853f7185e80bbf53`)
                .then((response) => response.json())
                .then((info) => {
                    this.setState({
                        seriesFavoritas: [...this.state.seriesFavoritas, info]
                    })
                })
                .catch((error) => console.log(error))
        });
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <Card/>

                <h2 className="alert alert-primary">Películas favoritas</h2>
                {this.state.peliculasFavoritas.map((pelicula) => (
                    <section className="row cards" id="movies" key={pelicula.id}>
                        <article className="single-card-movie">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                                className="card-img-top"
                                alt={pelicula.title}
                            />
                            <div className="cardBody">
                                <h5 className="card-title">{pelicula.title}</h5>
                                <p className="card-text">{pelicula.overview}</p>
                                <Link to={`/pelicula/${pelicula.id}`}>Ir a detalle</Link>
                            </div>
                        </article>
                    </section>
                ))}

                <h2 className="alert alert-warning">Series favoritas</h2>
                {this.state.seriesFavoritas.map((serie) => (
                    <section className="row cards" id="tv-show" key={serie.id}>
                        <article className="single-card-tv">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                                className="card-img-top"
                                alt={serie.name}
                            />
                            <div className="cardBody">
                                <h5 className="card-title">{serie.name}</h5>
                                <p className="card-text">{serie.overview}</p>
                                <Link to={`/serie/${serie.id}`}>Ir a detalle</Link>
                                <a href="" className="btn alert-warning">♥️</a>
                            </div>
                        </article>
                    </section>
                ))}

                <Footer/>
            </React.Fragment>
        )
    }
}

export default Favoritos
