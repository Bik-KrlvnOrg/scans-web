import { Module } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberRepository } from './repository/member.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateMemberGroupHandler, CreateMembersHandler } from './command';
import { MembershipController } from './membership.controller';
import { MemberGroupCreatedHandler, MembersCreatedHandler } from './event';
import { SponsorModule } from '../sponsor/sponsor.module';
import { MembershipSagas } from './saga/membership.sagas';
import { MemberGroupRepository } from './repository';

const CommandHandlers = [CreateMembersHandler, CreateMemberGroupHandler]
const EventHandlers = [MembersCreatedHandler, MemberGroupCreatedHandler]

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([MemberRepository, MemberGroupRepository]),
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
