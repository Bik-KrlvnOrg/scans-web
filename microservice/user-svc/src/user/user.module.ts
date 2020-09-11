import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserRepository } from './repository/user.repository';
import { UserCreatedHandler, UserUpdatedHandler } from './event/handler';
import { CreateUserHandler, UpdateUserHandler } from './command';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EventStoreModule, EventStoreSubscriptionType } from '@juicycleff/nestjs-event-store'
import { UserCreatedEvent, UserUpdatedEvent } from './event/impl';

const CommandHandlers = [CreateUserHandler, UpdateUserHandler]
const EventHandlers = [UserCreatedHandler, UserUpdatedHandler]


@Module({
    imports: [CqrsModule, EventStoreModule.registerFeature({
        type: 'event-store',
        featureStreamName: '$ce-user',
        subscriptions: [
            {
                type: EventStoreSubscriptionType.Volatile,
                stream: '$ce-user'

            }
        ],
        eventHandlers: {
            UserCreatedEvent: (data) => new UserCreatedEvent(data),
            UserUpdatedEvent: (data) => new UserUpdatedEvent(data),
        }
    })], providers: [
        UserRepository,
        UserService,
        ...CommandHandlers,
        ...EventHandlers
    ], controllers: [UserController]
})
export class UserModule { }
