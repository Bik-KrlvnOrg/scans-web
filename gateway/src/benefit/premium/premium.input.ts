import { CreatePremiumRequest, CreateRateRequest, Rate } from "src/_proto/benefit";
import { InputType, Field, ID } from "@nestjs/graphql";
import { PremiumDto, RateDto } from "src/dto/benefit.dto";
import { ValidateNested, IsUUID } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class PremiumInput implements CreatePremiumRequest {
    @Field(type => PremiumDto)
    @ValidateNested({ each: true })
    @Type(() => PremiumDto)
    premium: PremiumDto;
}

@InputType()
export class PremiumFindInput {
    @Field(type => ID)
    @IsUUID()
    id: string;
}

@InputType()
export class RateInput implements CreateRateRequest {
    @Field(() => [RateDto])
    rates: RateDto[];
}