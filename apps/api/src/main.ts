import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { substraction } from '@foundation/sample-lib'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  console.log('Substraction:', substraction(11, 5))
  await app.listen(3000)
}
bootstrap()
