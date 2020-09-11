import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Inject, OnModuleInit } from '@nestjs/common';
import { PROVIDERS } from 'src/libs';
import { ClientGrpc } from '@nestjs/microservices';
import { IUserService } from 'src/interface/user-service.interface';
import { UserSuccessType } from './user.type';
import { UserInput, UpdateUserInput } from './user.input';

@Resolver()
export class UserResolver implements OnModuleInit {
    constructor(@Inject(PROVIDERS.USER_CLIENT) private readonly client: ClientGrpc) { }
    private userService: IUserService

    onModuleInit() {
        this.userService = this.client.getService<IUserService>('UserService')
    }

    @Mutation(returns => UserSuccessType)
    async signup(@Args('input') data: UserInput) {
        const result = await this.userService.createUser(data).toPromise()
        console.log('resuser', result)
        return result
    }

    @Mutation(returns => UserSuccessType)
    async updateUser(@Args('input') data: UpdateUserInput) {
        const result = await this.userService.updateUser(data).toPromise()
        console.log('resuser', result)
        return result
    }


}
