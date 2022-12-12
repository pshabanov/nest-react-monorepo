import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = await app.get(ConfigService)
  const port = config.get<number>("PORT")
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('hbs');
  await app.listen(port || 3000, ()=>{
    console.log(`SERVER started on port: http://localhost:${port || 3000}`)
  });

}
bootstrap();
