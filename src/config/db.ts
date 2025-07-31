import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'

dotenv.config()
<<<<<<< HEAD

const db = new Sequelize(process.env.DB_URL!, {
    models: [__dirname + '/../models/**/*.ts'],
    logging: false
=======
const db = new Sequelize(process.env.DB_URL!, {
    models: [__dirname + '/../models/**/*.ts']
>>>>>>> c392d010e773bca638e18f95b7cbc543e6bb0649
})

export default db