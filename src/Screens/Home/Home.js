import React, { Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos: []
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6ee91af43dc9c7cc853f7185e80bbf53')
        .then(Response => Response.json())
        .then(data => this.setState(
            {datos: data.results}
        ))
        .catch(error => console.log(error));
    }
    render(){
        return(
            <>
               { this.state.datos.length === 0 ? <h3>Cargar...</h3> :
               
                this.state.datos.map(() => )
               }

            </>
        )
    }
}

export default Home