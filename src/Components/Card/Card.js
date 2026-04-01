import React, { Component } from "react";  

class Card extends Component {
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
            <article className='pelicula-card'>
                <img src={this.props.imagen} alt="" />
                <h2> {this.props.nombre}</h2> 
                <p> {this.props.descripcion}</p> 
                <button className='more' onClick={() => this.cambiarEstado()}>{this.state.textoBoton}</button> 
                <section className='extra'>
                    <p className={this.state.claseOculta}>{this.props.origen.name} </p> 
                </section>
		        <button onClick={() => this.props.borrar(this.props.id)} className='delete'>Borrar</button> 
            </article>
        )
    }
}

export default Card;