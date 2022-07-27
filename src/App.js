
import './App.css';
import Background from './componentes/Background';

function App() {
  return (
    <div className='App'>
        <div className='contenedor-principal'>
          <h1>Algunas clases interesantes de D&D</h1>  
          <Background
            nombre= 'Paladin'
            origen= 'la justicia'
            imagen='paladin'
            cargo='Guardian'
            empresa='el Cielo'
            background='The paladin is one of the standard playable character classes in most editions of the Dungeons & Dragons fantasy role-playing game. The paladin is a holy knight, crusading in the name of good and order, and is a divine spellcaster. '/>
          
          <Background 
            nombre='thief'
            origen='ciudad daga'
            imagen='thief'
            cargo='coleccionista de tesoros'
            empresa='cloacas de la ciudad'
            background='The rogue or thief is one of the standard playable character classes in most editions of the Dungeons & Dragons fantasy role-playing game. A rogue is a versatile character, capable of sneaky combat and nimble tricks'
          />
          <Background 
            nombre='Druida'
            origen='los bosques profundos'
            imagen='druid'
            cargo='Amo de la naturaleza'
            empresa='domador de animales'
            background='The druid is a playable character class in the Dungeons & Dragons fantasy role-playing game.[1][2] Druids wield nature-themed magic. Unlike clerics, druids do not have special powers against undead and, in some editions, cannot use metal armor. Druids have a unique ability that allows them to change into various animal forms, and various other qualities that assist them in natural settings. '

          />
               </div>
    </div>
  );
}

export default App;
