import React, { Component } from 'react';
import SectionPelis from '../../Components/SectionPelis/SectionPelis';
import TVShows from '../../Components/TVShows/TVShows';
import SearchBar from '../../Components/SearchBar/SearchBar';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: []
        }
    }

    render() {
        return (
            <div className='container'>
                <SearchBar />
                <SectionPelis />
                <TVShows />
            </div>
        )
    }
}

export default Home;
