import { Module } from '@nestjs/common';
import { ClientGrpcProxy, ClientProxyFactory } from '@nestjs/microservices';
import { MedicalResolver } from './medical.resolver';
import { ConfigService } from '@nestjs/config';
import { PROVIDERS } from 'src/libs';

@Module({

    providers: [MedicalResolver, {
        provide: PROVIDERS.REGISTER_CLIENT,
        useFactory: (configService: ConfigService): ClientGrpcProxy => {
            const registerRpc = configService.get('registerRpc')
            return ClientProxyFactory.create(registerRpc)
        }, inject: [ConfigService]

    }],
    exports: [PROVIDERS.REGISTER_CLIENT]
})
export class MedicalModule { }
