import { Field, InputType } from '@nestjs/graphql'
import { ValidateNested } from 'class-validator'
import { CreateMedicalRequest, UpdateMedicalRequest, Medical } from 'src/_proto/register'
import { Type } from 'class-transformer'
import { MedicalDto } from 'src/dto/register.dto'

@InputType()
export class MedicalInput implements CreateMedicalRequest {
    @Field(type => [MedicalDto])
    @ValidateNested({ each: true })
    @Type(() => MedicalDto)
    medicals: MedicalDto[]
}

@InputType()
export class UpdateMedicalInput implements UpdateMedicalRequest {
    @Field(type => MedicalDto)
    @ValidateNested({ each: true })
    @Type(() => MedicalDto)
    medical: MedicalDto
}