import config from 'config'
import mongoose from 'mongoose'

export const setupDb = async () => {
  // env variables in dev are set via config/default.json
  const { host, port, user, password, db } = config.get('dbConfig')
  const uri = `mongodb://${user}:${password}@${host}:${port}/${db}?retryWrites=true&w=majority`
  // console.log(`Connecting to ${uri}`) // for debugging
  await mongoose.connect(uri)
}
