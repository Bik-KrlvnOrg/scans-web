import { AggregateRoot } from '@nestjs/cqrs'
import { UserDto } from '../dto/user.dto'
import { UserCreatedEvent, UserUpdatedEvent } from '../event/impl'

export class UserModel extends AggregateRoot {
    user: UserDto

    constructor(private readonly id: string | undefined) {
        super()
    }

    setData(data) {
        this.user = data
    }

    create() {
        this.apply(new UserCreatedEvent(this.user))
    }

    update() { 
        this.apply(new UserUpdatedEvent(this.user))
    }
    
    remove() { }

}