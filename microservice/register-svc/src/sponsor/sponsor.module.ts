import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SponsorRepository } from './repository/sponsor.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateSponsorHandler } from './command';
import { SponsorCreatedHandler } from './event';

const CommandHandlers = [CreateSponsorHandler]
const EventHandlers = [SponsorCreatedHandler]

@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forFeature([SponsorRepository])
    ],
    providers: [...CommandHandlers, ...EventHandlers]
})
export class SponsorModule { }
