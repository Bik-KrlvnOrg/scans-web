import { User } from "src/_proto/user";
import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsUUID, IsNotEmpty, IsEmail } from "class-validator";

@InputType()
export class UserDto implements User {
    @Field({ nullable: true })
    @IsOptional()
    @IsUUID()
    id: string;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    username: string;

    @Field()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    password: string;
}