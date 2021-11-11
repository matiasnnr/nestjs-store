import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // ignora cualquier valor que no exista en los dto y sigue la ejecución sin problemas.
      whitelist: true,
      // detiene la ejecución del código si encuentra un valor que no es válido en los dto y devuelve un error.
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();
