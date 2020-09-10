import { Premium, Cover, PatientType, Rate } from "src/_proto/benefit";
import { Field, InputType, registerEnumType } from "@nestjs/graphql";
import { IsUUID, IsNotEmpty, IsOptional, IsNumber, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class RateDto implements Rate {
    @Field({ nullable: true })
    @IsOptional()
    @IsUUID()
    id: string;

    @Field()
    characteristics: string;

    @Field()
    value: number;

    @Field(() => PremiumDto)
    @ValidateNested({ each: true })
    @Type(() => PremiumDto)
    premium: Premium;
}

@InputType()
export class PremiumDto implements Premium {
    @Field({ nullable: true })
    @IsOptional()
    @IsUUID()
    id: string;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @IsOptional()
    description: string;

    @Field()
    @IsNumber()
    limit: number;

    @Field(() => RateDto, { nullable: true })
    @IsOptional()
    rates: Rate[];
}

export enum PatientEnum {
    OUT_PATIENT, IN_PATIENT
}

registerEnumType(PatientEnum, {
    name: 'PatientEnum'
})

@InputType()
export class CoverDto implements Cover {
    @Field({ nullable: true })
    @IsOptional()
    @IsUUID()
    id: string;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    description: string;

    @Field()
    @IsNotEmpty()
    amount: number;

    @Field()
    @IsOptional()
    coverage: string;


    @Field(type => PatientEnum)
    patientType: PatientType;

    @Field(type => PremiumDto)
    @ValidateNested({ each: true })
    @Type(type => PremiumDto)
    premium: Premium;
}
