import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: '',
            tipo: 'movie'
        }
    }

    controlarCambios(event, campo) {
        this.setState({
            [campo]: event.target.value
        })
    }

    buscar(event) {
        event.preventDefault();
        if (this.state.searchData !== '') {
            this.props.history.push('/resultados/' + this.state.tipo + '/' + this.state.searchData);
        }
    }

    render() {
        return (
            <form className="search-form" onSubmit={(event) => this.buscar(event)}>
                <input
                    type="text"
                    name="searchData"
                    placeholder="Buscar..."
                    value={this.state.searchData}
                    onChange={(event) => this.controlarCambios(event, 'searchData')}
                />
                <select
                    className="form-control"
                    value={this.state.tipo}
                    onChange={(event) => this.controlarCambios(event, 'tipo')}
                    style={{maxWidth: '130px'}}
                >
                    <option value="movie">Peliculas</option>
                    <option value="tv">Series</option>
                </select>
                <button type="submit" className="btn btn-success btn-sm">Buscar</button>
            </form>
        )
    }
}

<<<<<<< HEAD
export default withRouter(SearchBar);
=======
export default withRouter(SearchBar);
>>>>>>> 6c422ba8257506e99980be146bce198175e3f41c
