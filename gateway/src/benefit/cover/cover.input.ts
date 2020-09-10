import { CreateCoverRequest, Cover } from "src/_proto/benefit";
import { CoverDto } from "src/dto/benefit.dto";
import { Field, InputType, ID } from "@nestjs/graphql";
import { ValidateNested, IsUUID } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class CoverInput implements CreateCoverRequest {
    @Field(type => CoverDto)
    @ValidateNested({ each: true })
    @Type(type => CoverDto)
    cover: CoverDto;
}

@InputType()
export class CoverFindInput {
    @Field(type => ID)
    @IsUUID()
    id: string;
}