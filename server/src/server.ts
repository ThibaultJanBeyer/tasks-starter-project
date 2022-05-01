import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

import routes from './routes'

const expressServer = express()
const server = http.createServer(expressServer)
const socketServer = new Server(server, {
  cors: {
    origin: '*',
  },
})

expressServer.use(bodyParser.json())
expressServer.use(cors())
expressServer.use(routes())

socketServer.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat message', (msg) => {
    socketServer.emit('chat message', { text: msg, sender: socket.id })
  })
})

export { server, socketServer, expressServer }
