import { Module } from '@nestjs/common';
import { ClientGrpcProxy, ClientProxyFactory } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { PROVIDERS } from 'src/libs';
import { GroupsResolver } from './groups.resolver';

@Module({

  providers: [GroupsResolver, {
    provide: PROVIDERS.REGISTER_CLIENT,
    useFactory: (configService: ConfigService): ClientGrpcProxy => {
      const registerRpc = configService.get('registerRpc')
      return ClientProxyFactory.create(registerRpc)
    }, inject: [ConfigService]

  }],
  exports: [PROVIDERS.REGISTER_CLIENT]
})
export class GroupsModule { }
