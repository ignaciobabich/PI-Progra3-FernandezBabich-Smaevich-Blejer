import React, {Component} from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            data: "", tipo: "movie"
        }
    }
    controlarCambios(event, campo){
        this.setState({
            [campo]:event.target.value
            })
    }
    elegirPeli(){
        this.setState({ tipo: "movie"})
    }
    elegirSerie(){
        this.setState({ tipo: "tv"})
    }
    Busqueda(event){
        event.preventDefault();
        if(this.state.data === ""){
            return;
        }
        this.props.history.push(`/resultados/${this.state.tipo}/${this.state.data}`)
    }

    render(){
        return (
            <form className="search-form" onSubmit={(event) => this.Busqueda(event)}>
                <input type="text" className="" name="searchData" placeholder="Buscar..." value={this.state.data}
                onChange={(event) => this.controlarCambios(event, "data")}/>
                <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                <div>
                    <label htmlFor="movie"> Peliculas </label>
                    <input type="radio" id="movie" name="tipoBusqueda" onClick={() => this.elegirPeli()}/>

                    <label htmlFor="tv"> Series </label>
                    <input type="radio" id="tv" name="tipoBusqueda" onClick={() => this.elegirSerie()}/>
                </div>
                
            </form>
        )
    }
}

export default withRouter(SearchBar);