// Is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components.

import React from 'react';
import Pokecard from './Pokecard';
import { PokemonList } from './PokemonList';


const Pokedex = ({pokemon = PokemonList}) => {
    return (
        <div className="Pokedex">
            {pokemon.map(card => (
                <Pokecard key={card.id} name={card.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`} type={card.type} exp={card.base_experience} />
            ))}
        </div>
    )
}


export default Pokedex;