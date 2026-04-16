import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SectionPelis from '../../Components/SectionPelis/SectionPelis';
import TVShows from '../../Components/TVShows/TVShows';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Header from '../../Components/Header/Header';


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos: []
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
        .then(response => response.json())
        .then(data => {
            console.log('datadata', data)
            this.setState(
            {datos: data.results}
        )})
        .catch(error => console.log(error));
    }
    render(){
        return(
            <div className='container'>
                <Header/>
                <SearchBar/>
                <SectionPelis/>
                <TVShows/>
            </div>
        )
    }
}

export default Home;

