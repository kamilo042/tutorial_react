import React from 'react';

    function Background() {
      return (
        <div className='contenedor-background'>
            <img
              className='imagen-background'
              src={require ('../imagenes/paladin.jpg')}
              alt='imagen de paladin'/>
            <div className='contenedor-texto-background'>
                <p className='nombre-background'>Paladin de la justicia </p>
                <p className='cargo-background'> Guardian de los cielos</p>
                <p className='texto-background'>The paladin is one of the standard playable character classes in most editions of the Dungeons & Dragons fantasy role-playing game. The paladin is a holy knight, crusading in the name of good and order, and is a divine spellcaster. </p>
            </div>
        </div>
      );

 }

export default Background; 

