import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function SearchBar (props) {
    const [searchData, setsearchdata] = useState ("")
    const [tipo, setTipo] = useState("movie")
        
    
    function controlarCambios(event) {
        setsearchdata (event.target.value) 
        setTipo (event.target.value)
        
    }

    function buscar(event) {
        event.preventDefault();
        if (searchData !== '') {
            props.history.push('/resultados/' + tipo + '/' + searchData);
        }
    }

    
        return (
            <form className="search-form" onSubmit={(event) => buscar(event)}>
                <input
                    type="text"
                    name="searchData"
                    placeholder="Buscar..."
                    value={searchData}
                    onChange={(event) => controlarCambios(event, 'searchData')}
                />
                <select
                    className="form-control"
                    value={tipo}
                    onChange={(event) => controlarCambios(event, 'tipo')}
                    style={{maxWidth: '130px'}}
                >
                    <option value="movie">Peliculas</option>
                    <option value="tv">Series</option>
                </select>
                <button type="submit" className="btn btn-success btn-sm">Buscar</button>
            </form>
        )
    
}

export default withRouter(SearchBar);
