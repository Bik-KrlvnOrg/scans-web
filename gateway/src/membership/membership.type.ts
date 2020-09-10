import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RegisterResponseType {
    @Field()
    activiationLink: string
}