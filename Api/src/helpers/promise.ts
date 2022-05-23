import axios from "axios"
export const getUrl = ( url: string ) => {
    return new Promise( (resolve, reject) => {
        if( url ) {
            resolve( axios.get( url ) )
        } else {
            reject( `Se produjo un error en la url ${ url }`)
        }
    })
}

