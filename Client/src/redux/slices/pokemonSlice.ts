import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonState, PokemonObject } from '../../interfaces/interfaces';

const initialState: PokemonState = {
    page: 0,
    pokemons: [],
    isLoading: false
}


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: ( state ) => {
            state.isLoading = true
        },
        setPokemons: ( state, action: PayloadAction<PokemonObject[]> ) => {
            state.pokemons = action.payload
        }
    }
})

export const { startLoadingPokemons } = pokemonSlice.actions