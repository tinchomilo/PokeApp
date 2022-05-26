import { useState } from 'react'
import { Grid } from '../grid/Grid'
import { Sidebar } from '../ui/Sidebar'
import styles from './homePage.module.css'
import { PokemonObject } from '../../interfaces/interfaces';

export const HomePage = () => {

  const [pokemons, setPokemons] = useState<PokemonObject[]>()

  return (
    <div className={ styles.main }>

      <Sidebar />

      <div className={ styles.homePageContainer }>
          {/* <Grid /> */}

      </div>

    </div>
  )
}