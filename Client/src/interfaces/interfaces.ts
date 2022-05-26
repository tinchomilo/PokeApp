export interface PokemonObject {
    name: string,
    id: number,
    img: string,
    tipo: string
}

export interface Props {
    pokemons: PokemonObject
}

export interface PokemonState {
    page: number,
    pokemons: PokemonObject[],
    isLoading: boolean
}