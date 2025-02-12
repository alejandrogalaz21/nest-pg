import { Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_PIPE } from '@nestjs/core'
// Config's
import { PgConfig, AppConfig } from './config'
// modules
import { PgModule } from './databases/pg.module'
import { SeedModule } from './seed/seed.module'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [AppConfig, PgConfig] }),
    PgModule,
    SeedModule,
    UsersModule,
    ProductsModule,
    AuthModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe // Apply ValidationPipe globally
    }
  ],
  exports: []
})
export class AppModule {
  constructor(private configService: ConfigService) {
    // console.log('ENV app :', this.configService.get('app'))
    // console.log('ENV pg :', this.configService.get('pg'))
  }
}
