import React from 'react';
import {PokemonList} from './PokemonList';
import Pokedex from './Pokedex';
import './App.css';
import './Pokecard.css';
import './Pokedex.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Pokedex</h1>
      <Pokedex pokemon={PokemonList} />
    </div>
  );
}

export default App;
