import { Module } from '@nestjs/common';
import { PremiumService } from './premium.service';
import { PremiumController } from './premium.controller';
import { CreatePremiumHandler, UpdatePremiumHandler, DeletePremiumHandler } from './command';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PremiumRepository } from './repository/premium.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { CheckEntityService } from 'src/libs';
import { PremiumCreatedHandler, PremiumDeletedHandler, PremiumUpdatedHandler } from './event';
import { GetPremiumHandler, GetPremiumsHandler } from './query';
import { RateModule } from './rate/rate.module';


const CommandHandlers = [CreatePremiumHandler, UpdatePremiumHandler, DeletePremiumHandler]
const EventHandlers = [PremiumCreatedHandler,PremiumDeletedHandler,PremiumUpdatedHandler]
const QueryHandlers = [GetPremiumHandler, GetPremiumsHandler]

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([PremiumRepository]), RateModule],
  providers: [
    PremiumService,
    CheckEntityService,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ],
  controllers: [PremiumController]
})
export class PremiumModule { }
