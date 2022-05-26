import axios from "axios"
import { useEffect, useState } from 'react';


const url = 'http://localhost:3001/api/pokemon'

interface ListPokes {
  id: number,
  name: string,
  img: string
}

export const App = () => {

  const [pokemons, setPokemons] = useState<ListPokes[]>()

  useEffect(() => {
   axios.get( url )
    .then( res => setPokemons(res.data.listOfPokemon) )
  }, [])
  ;

  return (
    <div>
      <h1>PokemonApp</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
          {
            pokemons?.map( ( { id, img, name }: ListPokes ) => (
              <div key={ id }>
                <span>{ name }</span>
                <img src={ img } alt="poke imagen" />
              </div>
            ))
          }
      </div>
    </div>
  )
}