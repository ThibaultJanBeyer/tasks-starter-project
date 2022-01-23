import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import routes from './routes'

const server = express()
server.use(bodyParser.json())
server.use(cors())
server.use(routes())

export default server
