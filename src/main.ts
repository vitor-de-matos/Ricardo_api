import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = 3001;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Padaria API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { customSiteTitle: 'Padaria api' });

  await app.listen(port);
  console.log(`Swagger online em: http://localhost:${port}/api`);
}
bootstrap();
