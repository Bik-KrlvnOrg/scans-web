import { UserModel } from "../model/user.model";
import { UserDto } from "../dto/user.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    async createUser(user: UserDto) {
        const model = new UserModel(undefined)
        model.setData(user)
        model.create()
        return model
    }

    async updateUser(user: UserDto) {
        const model = new UserModel(user.id)
        model.setData(user)
        model.update()
        return model

    }

    async removeUser(user: UserDto) {
        const model = new UserModel(user.id)
        model.setData(user)
        model.remove()
        return model
    }
}