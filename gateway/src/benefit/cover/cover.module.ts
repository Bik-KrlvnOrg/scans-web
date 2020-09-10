import { Module } from '@nestjs/common';
import { ClientGrpcProxy, ClientProxyFactory } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { PROVIDERS } from 'src/libs';
import { CoverResolver } from './cover.resolver';

@Module({

  providers: [CoverResolver, {
    provide: PROVIDERS.BENEFIT_CLIENT,
    useFactory: (configService: ConfigService): ClientGrpcProxy => {
      const benefitRpc = configService.get('benefitRpc')
      return ClientProxyFactory.create(benefitRpc)
    }, inject: [ConfigService]

  }],
  exports: [PROVIDERS.BENEFIT_CLIENT]
})
export class CoverModule { }
