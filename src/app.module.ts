import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

// modules
import { PgModule } from './databases/pg.module'
import { CarsModule } from './cars/cars.module'
import { BrandsModule } from './brands/brands.module'
import { SeedModule } from './seed/seed.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PgModule,
    CarsModule,
    BrandsModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
