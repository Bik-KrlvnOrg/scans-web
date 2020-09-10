import { IsNotEmpty, IsPhoneNumber, IsEmail, IsString, MinLength, ValidateNested } from "class-validator";
import { Field, InputType } from "@nestjs/graphql";
import { Benefit, Medical, MedicalHistory, Member, Sponsor, Register } from '../_proto/register'
import { Type } from "class-transformer";

@InputType()
export class BenefitDto implements Benefit {
    @Field()
    @IsNotEmpty()
    benefitId: string;

    @Field()
    @IsNotEmpty()
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
    @Field()
    @IsNotEmpty()
    id: string;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
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