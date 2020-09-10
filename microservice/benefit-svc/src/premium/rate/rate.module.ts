import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RateRepository } from './repository';
import { CreateRateHandler } from './command';
import { RateCreatedHandler } from './event/handler/rate-created.handler';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';


const CommandHandlers = [CreateRateHandler]
const EventHandlers = [RateCreatedHandler]

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([RateRepository])],
    providers: [RateService, ...CommandHandlers, ...EventHandlers],
    controllers: [RateController]
})
export class RateModule { }
