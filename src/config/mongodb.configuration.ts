import { registerAs } from '@nestjs/config'
export default registerAs('mongodb', () => {
  // app params
  const environment = process.env.NODE_ENV
  const port = parseInt(process.env.PORT, 10) || 3000
  const defaultLimit = process.env.DEFAULT_LIMIT || 5

  // db params
  const db_name = process.env.DB_NAME || 'test'
  const db_host = process.env.DB_HOST || 'localhost'
  const db_port = parseInt(process.env.DB_PORT, 10) || 27017
  const db_user = process.env.DB_USER
  const db_password = process.env.DB_PASSWORD

  const db_url = `mongodb://${db_host}:${db_port}/${db_name}`
  const db_auth_url = `mongodb://${db_user}:${db_password}@${db_host}:${db_port}/${db_name}?authSource=admin`

  return {
    environment,
    defaultLimit,
    port,
    db: {
      host: db_host,
      name: db_name,
      port: db_port,
      url: db_user && db_password ? db_auth_url : db_url,
    },
  }
})
