import express from 'express'
import {
    Bisection,
    Falsepositions,
    NewtonRap,
    Onepoint,
    Secant,
} from '../controllers/RofCon.js'
const user_router = express.Router()
user_router.post('/BS', (req, res) => Bisection(req, res))
user_router.post('/FS', (req, res) => Falsepositions(req, res))
user_router.post('/OP', (req, res) => Onepoint(req, res))
user_router.post('/RP', (req, res) => NewtonRap(req, res))
user_router.post('/SC', (req, res) => Secant(req, res))
export default user_router
