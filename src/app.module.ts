import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
    CarsModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
