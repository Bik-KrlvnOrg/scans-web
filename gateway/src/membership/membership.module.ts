import { Module } from '@nestjs/common';
import { MembershipMutationResolver } from './membership-mutation.resolver';
import { ClientGrpcProxy, ClientProxyFactory } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { PROVIDERS } from 'src/libs/common';

@Module({
    providers: [MembershipMutationResolver, {
        provide: PROVIDERS.REGISTER_CLIENT,
        useFactory: (configService: ConfigService): ClientGrpcProxy => {
            const registerRpc =  configService.get('registerRpc')
            return ClientProxyFactory.create(registerRpc)
        }, inject: [ConfigService]
    }],
    exports: [PROVIDERS.REGISTER_CLIENT]
})
export class MembershipModule { }
