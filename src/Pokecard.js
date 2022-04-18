// Shows a single Pokemon, with their name, image, and type.

import React from 'react';

const Pokecard = (props) => {
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-name">{props.name}</h3>
            <img className="Pokecard-image" src={props.image} alt=""/>
            <ul className="Pokecard-list">
                <li>Type: {props.type}</li>
                <li>EXP: {props.exp}</li>
            </ul>
        </div>
    )
}


export default Pokecard;