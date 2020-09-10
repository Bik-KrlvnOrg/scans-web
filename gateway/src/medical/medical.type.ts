import { Field, ObjectType, ID } from "@nestjs/graphql";
import { MedicalSuccessResponse, Medical } from "src/_proto/register";


@ObjectType('medical')
export class MedicalType implements Medical {
    @Field(type => ID, { nullable: true })
    id: string

    @Field()
    name: string;

    @Field()
    value: number
}

@ObjectType()
export class MedicalSuccessResponseType implements MedicalSuccessResponse {
    @Field()
    success: boolean;
}