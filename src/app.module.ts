import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
// Config's
import { PgConfig, AppConfig } from './config'
// modules
import { PgModule } from './databases/pg.module'
import { SeedModule } from './seed/seed.module'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [AppConfig, PgConfig] }),
    PgModule,
    SeedModule,
    UsersModule,
    ProductsModule
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
