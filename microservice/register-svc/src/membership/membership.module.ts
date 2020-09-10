import { Module } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberRepository } from './repository/member.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateMembersHandler } from './command';
import { MembershipController } from './membership.controller';
import { MembersCreatedHandler } from './event';
import { SponsorModule } from '../sponsor/sponsor.module';
import { MembershipSagas } from './saga/membership.sagas';

const CommandHandlers = [CreateMembersHandler]
const EventHandlers = [MembersCreatedHandler]

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([MemberRepository]),
    SponsorModule
  ],
  providers: [
    MembershipService,
    ...CommandHandlers,
    ...EventHandlers,
    MembershipSagas
  ],
  controllers: [MembershipController]
})
export class MembershipModule { }
