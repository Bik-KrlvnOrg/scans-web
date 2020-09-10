import { Module } from '@nestjs/common';
import { ClientGrpcProxy, ClientProxyFactory } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { PROVIDERS } from 'src/libs';
import { PremiumResolver } from './premium/premium.resolver';
import { CoverModule } from './cover/cover.module';

@Module({

  providers: [PremiumResolver, {
    provide: PROVIDERS.BENEFIT_CLIENT,
    useFactory: (configService: ConfigService): ClientGrpcProxy => {
      const benefitRpc = configService.get('benefitRpc')
      return ClientProxyFactory.create(benefitRpc)
    }, inject: [ConfigService]

  }],
  exports: [PROVIDERS.BENEFIT_CLIENT],
  imports: [CoverModule]
})
export class BenefitModule { }
