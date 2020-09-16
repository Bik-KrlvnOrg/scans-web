import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupRepository } from './repository/group.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateGroupHandler, DeleteGroupHandler, UpdateGroupHandler } from './command';
import { GroupCreatedHandler, GroupDeletedHandler, GroupUpdatedHandler } from './event';
import { GetGroupHandler, GetGroupsHandler } from './query';


const CommandHandlers = [CreateGroupHandler, DeleteGroupHandler, UpdateGroupHandler]
const EventHandlers = [GroupCreatedHandler, GroupUpdatedHandler, GroupDeletedHandler]
const QueryHandlers = [GetGroupHandler, GetGroupsHandler]

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([GroupRepository])],
  providers: [...CommandHandlers, ...EventHandlers, ...QueryHandlers, GroupsService],
  controllers: [GroupsController]
})
export class GroupsModule { }
