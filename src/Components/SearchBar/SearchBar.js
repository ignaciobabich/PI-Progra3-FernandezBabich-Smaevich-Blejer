import React from 'react';

function SearchBar() {
    return (
        <form className="search-form">
            <input type="text" className="" name="searchData" placeholder="Buscar..."/>
            <button type="submit" className="btn btn-success btn-sm">Buscar</button>
        </form>
    )
}

export default SearchBar;