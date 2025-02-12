import { registerAs } from '@nestjs/config'
import { DatabaseConfig } from './../common/interfaces/db.interface'

export default registerAs(
  'pg',
  () =>
    <DatabaseConfig>{
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER ?? 'user',
      password: process.env.DB_PASSWORD ?? 'password',
      database: process.env.DB_NAME ?? 'db_test',
      synchronize: true
    }
)
