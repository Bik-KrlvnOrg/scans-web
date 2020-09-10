import { IsNotEmpty, IsPhoneNumber, IsEmail, IsString, MinLength, ValidateNested, IsOptional, IsUUID, IsNumber } from "class-validator";
import { Field, InputType, ID } from "@nestjs/graphql";
import { Benefit, Medical, MedicalHistory, Member, Sponsor, Register } from '../_proto/register'
import { Type } from "class-transformer";


@InputType()
export class MedicalInputDto implements Medical {
    @Field(type => ID, { nullable: true })
    @IsOptional()
    @IsUUID()
    id: string;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNumber()
    value: number;
}

@InputType()
export class FindMedicalInputDto {
    @Field(type => ID)
    @IsUUID()
    id: string
}

@InputType()
export class RemoveMedicalInputDto {
    @Field(type => ID)
    @IsUUID()
    id: string
}

@InputType()
export class BenefitDto implements Benefit {
    @Field()
    @IsUUID()
    benefitId: string;

    @Field({ nullable: true })
    @IsOptional()
    title: string;
}

@InputType()
export class MedicalHistoryDto implements MedicalHistory {
    @Field(type => [MedicalDto])
    @ValidateNested({ each: true })
    @Type(() => MedicalDto)
    medicals: MedicalDto[];
}

@InputType()
export class MemberDto implements Member {
    id: string;
    @Field()
    @MinLength(2)
    firstname: string;

    @Field()
    @MinLength(2)
    lastname: string;

    @Field()
    @IsNotEmpty()
    dob: string;

    @Field()
    @IsNotEmpty()
    gender: string;

    @Field()
    @IsPhoneNumber('ZZ')
    contact: string;

    @Field()
    @IsEmail()
    email: string;

    @Field()
    @IsString()
    relationship: string;

    @Field()
    @IsNotEmpty()
    residentialAddress: string;

    @Field(type => BenefitDto)
    @ValidateNested({ each: true })
    @Type(() => BenefitDto)
    benefit: BenefitDto;

    @Field(type => MedicalHistoryDto)
    @ValidateNested({ each: true })
    @Type(() => MedicalHistoryDto)
    medicalHistory: MedicalHistoryDto;
}


@InputType()
export class SponsorDto implements Sponsor {
    @Field(type => ID, { nullable: true })
    @IsOptional()
    @IsUUID()
    id: string;

    @Field()
    @MinLength(2)
    name: string;

    @Field()
    @IsNotEmpty()
    relationship: string;

    @Field()
    @IsPhoneNumber('ZZ')
    contact: string;

    @Field()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    password: string;

    @Field()
    @IsNotEmpty()
    residentialAddress: string;

    @Field()
    @IsNotEmpty()
    postalAddress: string;
}



@InputType()
export class MedicalDto implements Medical {
    @Field(type => ID, { nullable: true })
    @IsOptional()
    @IsUUID()
    id: string;

    @Field()
    @MinLength(2)
    name: string;

    @Field()
    @IsNumber()
    value: number;
}

@InputType()
export class RegisterDto implements Register {
    @Field()
    @IsNotEmpty()
    type: string;

    @Field(type => [MemberDto])
    @ValidateNested({ each: true })
    @Type(() => MemberDto)
    members: MemberDto[];

    @Field(type => SponsorDto)
    @ValidateNested({ each: true })
    @Type(() => SponsorDto)
    sponsor: SponsorDto;

}