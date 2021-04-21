import express from 'express'
import { Langrange, Newton_Inter, splin } from '../controllers/InterCon.js'
const user_router = express.Router()
user_router.post('/NT', (req, res) => Newton_Inter(req, res))
user_router.post('/LG', (req, res) => Langrange(req, res))
user_router.post('/SP', (req, res) => splin(req, res))
export default user_router
