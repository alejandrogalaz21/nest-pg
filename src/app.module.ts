import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
// Config's
import { PgConfig, AppConfig } from './config'
// modules
import { PgModule } from './databases/pg.module'
import { CarsModule } from './cars/cars.module'
import { BrandsModule } from './brands/brands.module'
import { SeedModule } from './seed/seed.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [AppConfig, PgConfig] }),
    PgModule,
    CarsModule,
    BrandsModule,
    SeedModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {
  constructor(private configService: ConfigService) {
    // console.log('ENV app :', this.configService.get('app'))
    // console.log('ENV pg :', this.configService.get('pg'))
  }
}
