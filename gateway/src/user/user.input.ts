import { CreateUserRequest, User, UpdateUserRequest } from "src/_proto/user";
import { Field, InputType } from "@nestjs/graphql";
import { UserDto } from "src/dto/user.dto";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class UserInput implements CreateUserRequest {
    @Field(type => UserDto)
    @ValidateNested({ each: true })
    @Type(type => UserDto)
    user: User;
}


@InputType()
export class UpdateUserInput implements UpdateUserRequest {
    @Field(type => UserDto)
    @ValidateNested({ each: true })
    @Type(type => UserDto)
    user: User;
}