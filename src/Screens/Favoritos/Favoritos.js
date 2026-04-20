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
                        peliculasFavoritas: this.state.peliculasFavoritas.concat(info)
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
                        seriesFavoritas: this.state.seriesFavoritas.concat(info)
                    })
                })
                .catch((error) => console.log(error))
        });
    }

    render(){
        console.log (this.state.peliculasFavoritas);
        return(
            <React.Fragment>
                <Header/>
            <section>
            <Card/>
            </section>
            <section>
            <Card/>
            </section>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Favoritos
