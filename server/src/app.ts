import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

const app = express()
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(cors())
app.use(routes())

// env variables in dev are set via nodemon.json
const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// console.log(`Connecting to ${uri}`); // for debugging

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error
  })
