import { Field, ObjectType } from "@nestjs/graphql";
import { RegisterSuccessResponse } from "src/_proto/register";

@ObjectType()
export class RegisterResponseType implements RegisterSuccessResponse {
    @Field()
    success: boolean;
}