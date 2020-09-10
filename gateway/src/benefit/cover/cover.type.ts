import { Cover, PatientType, CoverSuccessResponse } from "src/_proto/benefit";
import { Field, ObjectType, ID } from "@nestjs/graphql";
import { PatientEnum } from "src/dto/benefit.dto";
import { PremiumType } from "../premium/premium.type";

@ObjectType('cover')
export class CoverType implements Cover {
    @Field(() => ID, { nullable: true })
    id: string;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    amount: number;

    @Field()
    coverage: string;

    @Field(() => PatientEnum)
    patientType: PatientType;

    @Field(() => PremiumType, { nullable: true })
    premium: PremiumType;
}

@ObjectType()
export class CoverSuccessType implements CoverSuccessResponse {
    @Field()
    success: boolean;
}