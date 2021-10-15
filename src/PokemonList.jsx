import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';


function PokemonList() {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((data) => {
        return data.json()
      })
      .then(res => {
        setPokemons(res.results)
      })
    }, [])
  
    return (
      <div className="pokemon-list">
        {pokemons.map(pokemon => 
        
        <Link className="pokemon-list-item" key={pokemon.name} to={{pathname: `${pokemon.name}`} }><div>{pokemon.name}</div></Link> )}
      </div>
    );
  }

  export default PokemonList;