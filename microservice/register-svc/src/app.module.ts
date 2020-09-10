import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembershipModule } from './membership/membership.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { MedicalModule } from './medical/medical.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { config, PostgresDbConfig } from './libs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresDbConfig
    }),
    MembershipModule,
    MedicalModule,
    SponsorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
