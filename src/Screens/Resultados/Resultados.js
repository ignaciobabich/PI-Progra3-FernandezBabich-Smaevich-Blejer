import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import Loader from "../../Components/Loader/Loader";

class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            cargando: true
        }
    }

    componentDidMount() {
        const tipo = this.props.match.params.tipo;
        const query = this.props.match.params.query;

        fetch('https://api.themoviedb.org/3/search/' + tipo + '?api_key=6ee91af43dc9c7cc853f7185e80bbf53&query=' + query)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    resultados: data.results,
                    cargando: false
                });
            })
            .catch((error) => console.log(error));
    }

    componentDidUpdate(prevProps) {
        const prevQuery = prevProps.match.params.query;
        const prevTipo = prevProps.match.params.tipo;
        const query = this.props.match.params.query;
        const tipo = this.props.match.params.tipo;

        if (prevQuery !== query || prevTipo !== tipo) {
            this.setState({ cargando: true });
            fetch('https://api.themoviedb.org/3/search/' + tipo + '?api_key=6ee91af43dc9c7cc853f7185e80bbf53&query=' + query)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        resultados: data.results,
                        cargando: false
                    });
                })
                .catch((error) => console.log(error));
        }
    }

    render() {
        const tipo = this.props.match.params.tipo;
        const query = this.props.match.params.query;

        return (
            <React.Fragment>
                <div className="container">
                    <h2 className="alert alert-primary">
                        Resultados para "{query}" en {tipo === 'movie' ? 'Películas' : 'Series'}
                    </h2>
                    <section className="cards">
                        {this.state.cargando ? (
                            <Loader />
                        ) : this.state.resultados.length === 0 ? (
                            <p>No se encontraron resultados.</p>
                        ) : (
                            this.state.resultados.map((item) =>
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    tipo={tipo}
                                    nombre={tipo === 'movie' ? item.title : item.name}
                                    imagen={item.poster_path}
                                    descripcion={item.overview}
                                />
                            )
                        )}
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default Resultados;
