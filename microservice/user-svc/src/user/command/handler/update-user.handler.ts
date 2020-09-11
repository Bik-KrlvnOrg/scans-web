import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { UpdateUserCommand } from "../impl";
import { UserRepository } from "src/user/repository/user.repository";
import { UserSuccessResponse } from "src/_proto/user";
import { UserUpdatedEvent } from "src/user/event/impl";

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        private readonly userRepository: UserRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: UpdateUserCommand): Promise<UserSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const result = await this.userRepository.updateUser(cmd)
            this.event$.publish(new UserUpdatedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ code: 500, message: err.message })
        }
    }
}
