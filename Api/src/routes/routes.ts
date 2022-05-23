import { Router } from 'express'

import { getPokemons } from '../controllers/pokemon';

const router = Router()

router.get( '/api/pokemon', getPokemons )




export default router