import { Request, Response } from "express";
import axios from 'axios';
import { getUrl } from "../helpers/promise";

const url = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemons = async( _req: Request, res: Response ) => {

    try {

        const requestApi = await axios.get(url)
        const listOfUrls = requestApi.data.results.map( (elem: any) => getUrl(elem.url) )
        // console.log(await Promise.all( listOfUrls ) )
        const listOfPokemon = ( await Promise.all( listOfUrls ) ).map( elem => ({
            id: elem.data.id,
            name: elem.data.name,
            img: elem.data.sprites.other.dream_world.front_default,
            type: elem.data.types.map( ( { type }: any ) => ( type.name))
        }))

        res.status(200).json({
            ok: true,
            listOfPokemon
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "error. Comunicarse con admin"
        });
    }
}