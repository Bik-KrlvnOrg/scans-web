import { MedicalInput } from "src/_proto/register";
import { Field, InputType, ID } from "@nestjs/graphql";
import { IsNumberString, IsNotEmpty, IsUUID, IsOptional } from "class-validator";

@InputType()
export class MedicalInputDto implements MedicalInput {
    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNumberString()
    value: string;
}

@InputType()
export class FindMedicalInputDto {
    @Field({ nullable: true })
    @IsOptional()
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
export class UpdateMedicalInputDto extends MedicalInputDto {
    @Field(type => ID)
    @IsUUID()
    id: string
}