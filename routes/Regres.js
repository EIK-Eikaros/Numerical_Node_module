import express from 'express'
import { lin, poly, multi } from '../controllers/RegresCon.js'
const user_router = express.Router()
user_router.post('/LN', (req, res) => lin(req, res))
user_router.post('/PL', (req, res) => poly(req, res))
user_router.post('/MT', (req, res) => multi(req, res))
export default user_router
