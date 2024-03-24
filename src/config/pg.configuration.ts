import { registerAs } from '@nestjs/config'
import { DatabaseConfig } from './../common/interfaces/db.interface'

export default registerAs(
  'pg',
  () =>
    <DatabaseConfig>{
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: process.env.NODE_ENV === 'production' ? false : true
    }
)
