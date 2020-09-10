import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoverRepository } from './repository/cover.repository';
import { CreateCoverHandler, UpdateCoverHandler, DeleteCoverHandler } from './command';
import { CoverCreatedHandler, CoverUpdatedHandler, CoverDeletedHandler } from './event';
import { CqrsModule } from '@nestjs/cqrs';
import { CoverService } from './cover.service';
import { CoverController } from './cover.controller';
import { GetCoversHandler, GetCoverHandler } from './query';

const CommandHandlers = [CreateCoverHandler, UpdateCoverHandler, DeleteCoverHandler]
const EventHandlers = [CoverCreatedHandler, CoverUpdatedHandler, CoverDeletedHandler]
const QueryHandlers = [GetCoversHandler, GetCoverHandler]

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([CoverRepository])],
    providers: [...CommandHandlers, ...EventHandlers, ...QueryHandlers, CoverService],
    controllers: [CoverController]
})
export class CoverModule { }
