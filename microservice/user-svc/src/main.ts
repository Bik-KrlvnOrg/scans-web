import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.USER_SVC_URL,
      package: process.env.USER_PROTO_PACKAGE,
      protoPath: 'dist/libs/user.proto',
    },
  });
  app.useGlobalPipes(new ValidationPipe());

  await app.listenAsync()

}
bootstrap();
