import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremiumModule } from './premium/premium.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresDbConfig, config } from './libs';
import { ConfigModule } from '@nestjs/config';
import { CoverModule } from './cover/cover.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresDbConfig
    }),
    PremiumModule,
    CoverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
