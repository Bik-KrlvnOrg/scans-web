import { Controller } from '@nestjs/common';
import { CreateUserRequest, UpdateUserRequest } from 'src/_proto/user';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @GrpcMethod('UserService', 'CreateUser')
    async createUser(req: CreateUserRequest) {
        return this.userService.createUser(req.user)
    }

    @GrpcMethod('UserService', 'UpdateUser')
    async updateUser(req: UpdateUserRequest) {
        return this.userService.updateUser(req.user)
    }
}
