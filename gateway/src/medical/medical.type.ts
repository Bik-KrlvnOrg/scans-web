import { Field, ObjectType, ID } from "@nestjs/graphql";
import {  MedicalSuccessResponse } from "src/_proto/register";


@ObjectType('medical')
export class MedicalResponseType {
    @Field(type => ID)
    id: string

    @Field()
    name: string;

    @Field()
    value: string
}

@ObjectType()
export class MedicalSuccessResponseType implements MedicalSuccessResponse {
    @Field()
    success: boolean;
}