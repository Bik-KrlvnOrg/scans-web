import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EventStoreModule } from '@juicycleff/nestjs-event-store';
import { ConfigModule } from '@nestjs/config'
import { config, EventStoreConfig } from './libs';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    EventStoreModule.registerAsync({
      type: 'event-store',
      useClass: EventStoreConfig
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
