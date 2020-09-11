
import { Module } from '@nestjs/common';
import { ClientGrpcProxy, ClientProxyFactory } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { PROVIDERS } from 'src/libs';
import { UserResolver } from './user.resolver';

@Module({

  providers: [UserResolver, {
    provide: PROVIDERS.USER_CLIENT,
    useFactory: (configService: ConfigService): ClientGrpcProxy => {
      const userRpc = configService.get('userRpc')
      return ClientProxyFactory.create(userRpc)
    }, inject: [ConfigService]

  }],
  exports: [PROVIDERS.USER_CLIENT]
})
export class UserModule { }
