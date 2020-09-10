import { Field, InputType } from '@nestjs/graphql'
import { ValidateNested } from 'class-validator'
import { MedicalInputDto, UpdateMedicalInputDto } from 'src/dto/medical.dto'
import { CreateMedicalRequest } from 'src/_proto/register'
import { Type } from 'class-transformer'

@InputType()
export class CreateMedicalInput implements CreateMedicalRequest {
    @Field(type => [MedicalInputDto])
    @ValidateNested({ each: true })
    @Type(() => MedicalInputDto)
    medicals: MedicalInputDto[]
}

@InputType()
export class UpdateMedicalInput extends UpdateMedicalInputDto { }