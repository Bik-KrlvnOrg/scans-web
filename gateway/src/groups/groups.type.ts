import { Field, ObjectType } from "@nestjs/graphql";
import { Group, GroupSuccessResponse } from "src/_proto/register";

@ObjectType()
export class GroupType implements Group {
    @Field({ nullable: true })
    id: string;
    @Field()
    name: string;
    @Field({ nullable: true })
    description: string;
}

@ObjectType()
export class GroupSuccessType implements GroupSuccessResponse {
    @Field()
    success: boolean;
}