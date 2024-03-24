import { registerAs } from '@nestjs/config'
import { DatabaseConfig } from 'src/common/interfaces/db.interface'

export default registerAs('mongodb', () => {
  const db_host = process.env.DB_HOST || 'localhost'
  const db_port = parseInt(process.env.DB_PORT, 10) || 27017
  const db_name = process.env.DB_NAME || 'test'
  const db_user = process.env.DB_USER
  const db_password = process.env.DB_PASSWORD

  const db_url = `mongodb://${db_host}:${db_port}/${db_name}`
  const db_auth_url = `mongodb://${db_user}:${db_password}@${db_host}:${db_port}/${db_name}?authSource=admin`

  return <DatabaseConfig>{
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_password,
    database: process.env.DB_NAME,
    url: db_user && db_password ? db_auth_url : db_url
  }
})
