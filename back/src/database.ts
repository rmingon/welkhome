import { config } from './config'
import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
  database: config.DATABASE_NAME,
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  models: [__dirname + '/models']
})