import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'

async function main() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  )
  const port = process.env.PORT || 3000
  await app.listen(port)
  console.log(`App Start att port ${port}`)
}
main()
