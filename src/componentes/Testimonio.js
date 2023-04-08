import React from 'react';
import '../hojas-de-estilo/testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='image-testimonio' src={require(`../imagenes/testimonio-${props.imagen}.avif`)}
        alt='Foto Rubia' />
      <div className='contendor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> de {props.pais}</p>
        <p className='cargo-testimonio'><strong>{props.trabajo} </strong>en {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
};

export default Testimonio;

