import { InputType, Field } from "@nestjs/graphql";
import { RegisterDto } from "../dto/register.dto";
import { ValidateNested } from "class-validator";
import { Type } from 'class-transformer'
@InputType()
export class CreateRegisterInput {
    @Field(type => RegisterDto)
    @ValidateNested({ each: true })
    @Type(() => RegisterDto)
    register: RegisterDto
}
