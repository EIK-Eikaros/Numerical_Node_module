import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import rootofequa from './routes/RofEq.js'
import liner from './routes/Linal.js'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
import swaggerUi from 'swagger-ui-express'
const swaggerDocument = require('./swagger.json')
import interpo from './routes/Inter.js'
import regress from './routes/Regres.js'
const app = express()
const port = 8080
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true }))
app.use('/api/Lina', liner)
app.use('/api/Rof', rootofequa)
app.use('/api/Inter', interpo)
app.use('/api/Reg', regress)
app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, { explorer: true })
)
app.listen(port, 'localhost', () => {
    console.log(`server Started at port ${port}`)
})
