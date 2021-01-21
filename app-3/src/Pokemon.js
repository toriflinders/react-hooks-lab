import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = props => {
  const {name} = props.match.params
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      setPokemon(response.data)  
    })
  }, [name])
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
    </div>
  )
}
export default Pokemon;