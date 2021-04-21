import express from 'express'
import {
    Conjugate,
    Cramer,
    Gauss_E,
    Gauss_J,
    Gauss_S,
    Jacobi,
    LUDecomposition,
} from '../controllers/LinearCon.js'
const user_router = express.Router()
user_router.post('/CR', (req, res) => Cramer(req, res))
user_router.post('/GE', (req, res) => Gauss_E(req, res))
user_router.post('/LU', (req, res) => LUDecomposition(req, res))
user_router.post('/CG', (req, res) => Conjugate(req, res))
user_router.post('/GJ', (req, res) => Gauss_J(req, res))
user_router.post('/JB', (req, res) => Jacobi(req, res))
user_router.post('/GS', (req, res) => Gauss_S(req, res))
export default user_router
