import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'annie',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class PgModule {
  constructor() {
    const { DB_USER, DB_PASSWORD } = process.env
    console.log({ DB_USER, DB_PASSWORD })
  }
}
