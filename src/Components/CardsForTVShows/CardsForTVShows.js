import React from 'react';
import TVShows from '../TVShows/TVShows';

function CardsForTVShows() {
    return(
        <React.Fragment>
            <h2 class="alert alert-warning">Popular TV shows this week</h2>
            <section class="row cards" id="tv-show">
                <TVShows/>
                <TVShows/>
                <TVShows/>
                <TVShows/>
            </section>
        </React.Fragment>
    )
}

export default CardsForTVShows