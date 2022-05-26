import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dontenv from 'dotenv'
import routes from './routes/routes'
dontenv.config()

const app = express()

// Logs de peticiones
app.use( morgan( 'dev' ) )

// Parseo del body
app.use( express.json() )

app.use( cors() )

app.use( routes )


app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${ process.env.PORT }`)
})