import React from 'react';

function SearchBar() {
    return (
        <React.Fragment>
            <form class="search-form" action="results.html" method="get">
            <input type="text" class="" name="searchData" placeholder="Buscar..." value=""/>
            <button type="submit" class="btn btn-success btn-sm">Buscar</button>
        </form>
        </React.Fragment>
    )
}

export default SearchBar;