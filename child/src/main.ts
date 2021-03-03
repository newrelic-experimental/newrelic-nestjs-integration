import newrelic from 'newrelic';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NewrelicInterceptor } from './newrelic.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new NewrelicInterceptor());
  await app.listen(3000);
}
bootstrap();
