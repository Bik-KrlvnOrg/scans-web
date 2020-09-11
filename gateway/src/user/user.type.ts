import { User, UserSuccessResponse } from "src/_proto/user";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserType implements User {
    @Field(type => ID, { nullable: true })
    id: string;

    @Field()
    name: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;
}


@ObjectType()
export class UserSuccessType implements UserSuccessResponse{
    @Field()
    success: boolean;
}