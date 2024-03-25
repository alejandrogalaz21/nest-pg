import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
// Config's
import { PgConfig, AppConfig } from './config'
import { TypeOrmModule } from '@nestjs/typeorm'
// modules
import { PgModule } from './databases/pg.module'
import { SeedModule } from './seed/seed.module'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [AppConfig, PgConfig] }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('pg.host'),
        port: configService.get('pg.port'),
        username: configService.get('pg.user'),
        password: configService.get('pg.password'),
        database: configService.get('pg.database'),
        autoLoadEntities: true,
        synchronize: true
      }),
      inject: [ConfigService]
    }),
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
