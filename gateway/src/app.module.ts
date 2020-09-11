import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicalModule } from './medical/medical.module';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';
import { MembershipModule } from './membership/membership.module';
import { ConfigModule } from '@nestjs/config'
import { config } from './libs';
import { BenefitModule } from './benefit/benefit.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, './graphql/schema/generated.gql')
    }),
    MedicalModule,
    MembershipModule,
    BenefitModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
