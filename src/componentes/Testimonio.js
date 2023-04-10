import React from 'react';
import '../hojas-de-estilo/testimonio.css';


class Testimonio extends React.Component{
  render(){
    return(
      <div className='contenedor-testimonio'>
      <img className='image-testimonio' src={require(`../imagenes/testimonio-${this.props.imagen}.avif`)}
        alt={`Foto de ${this.props.nombre}`}/>
      <div className='contendor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{this.props.nombre}</strong> de {this.props.pais}</p>
        <p className='cargo-testimonio'><strong>{this.props.trabajo} </strong>en {this.props.empresa}</p>
        <p className='texto-testimonio'>"{this.props.testimonio}"</p>
      </div>
    </div>
    )
  }
}


export default Testimonio;

