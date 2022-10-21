import config from 'config'
import { Sequelize } from 'sequelize'
import tasks from './models/tasks'

const { host, port, user, password, db } = config.get('dbConfig') as any

export const sequelize = new Sequelize(db, user, password, {
  dialect: 'postgres',
  host,
  port,
})

export const TaskModel = tasks({ sequelize })

export const releaseSequelizeClient = async () => {
  if (sequelize.close) await sequelize.close()
}

export const setupDb = async () => {
  await sequelize.sync() // { force: true, match: /dev$/ } can be added if you want to clean the DB on each start (only if the db matches the name "dev")
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
