import React, { Component } from "react";  


class CardsForTVShows extends Component {
    constructor(props){
        super(props);
        this.state = {
            textoBoton: "Ver Mas",
            ClaseOculta: "oculta"
        };
    }

    cambiarEstado() {
        if(this.state.textoBoton === "Ver Mas"){
            this.setState({
                textoBoton: "Ver Menos",
                ClaseOculta: ""
            })
        }
        else{
            this.setState({
                textoBoton:"Ver Mas",
                ClaseOculta: "oculta"
            })
        }
    }

    render() {
        return(
            <article class="single-card-movie"> 
                <img src= {'https://image.tmdb.org/t/p/w342/' + this.props.imagen} class="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.nombre}</h5>
                    <button className='more' onClick={() => this.cambiarEstado()}>{this.state.textoBoton}</button>
                        <section className='extra'>
                            <a href="Detalle.js" className={this.state.ClaseOculta}>{this.props.descripcion}</a>
                        </section>
                    <a href="" class="btn alert-primary">🩶</a>
                </div>
                </article>
        )
    }
}


export default CardsForTVShows