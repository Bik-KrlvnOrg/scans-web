import { Field, ID, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { IsUUID, ValidateNested } from "class-validator";
import { GroupDto } from "src/dto/register.dto";
import { CreateGroupRequest, GetMedicalRequest } from "src/_proto/register";

@InputType()
export class GroupInput implements CreateGroupRequest {
    @Field(() => GroupDto)
    @ValidateNested({ each: true })
    @Type(() => GroupDto)
    group: GroupDto;
}

@InputType()
export class FindGroupInput implements GetMedicalRequest {
    @Field(() => ID)
    @IsUUID()
    id: string;
}