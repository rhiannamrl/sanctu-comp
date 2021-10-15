import { useEffect, useState } from 'react';
import './App.css';

function Pokemon(props) {
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/` + props.match.params.pokemonName)
      .then((data) => {
        return data.json()
      })
      .then(res => {
        setPokemon(res)
      })
    }, [props.match.params.pokemonName])
  

    return (
        <>
        {pokemon &&
            <div className="pokemon-details">
            <ul>
            <li><img alt={pokemon.name} src={pokemon.sprites.front_default}></img></li>
            <li>name: {pokemon.name}</li>
            <li>height: {pokemon.height}</li> 
            <li>base experience: {pokemon.base_experience}</li> 
            </ul>
          </div>
        }
        </>
      )
  }

  export default Pokemon;