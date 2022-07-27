import React from 'react';
import '../hojas-de-estilo/Background.css'
    function Background(props) {
      return (
        <div className='contenedor-background'>
            <img
              className='imagen-background'
              src={require (`../imagenes/background-${props.imagen}.jpg`)}
              alt='imagen de paladin'/>
            <div className='contenedor-texto-background'>
                <p className='nombre-background'><strong>{props.nombre}</strong> de {props.origen}</p>
                <p className='cargo-background'> {props.cargo} de {props.empresa}</p>
                <p className='texto-background'>"{props.background}"</p>
            </div>
        </div>
      );

 }

export default Background; 

