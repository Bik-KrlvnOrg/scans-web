import { PremiumSuccessResponse, Premium, Rate } from "src/_proto/benefit";
import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class PremiumSuccessType implements PremiumSuccessResponse {
    @Field()
    success: boolean;
}

@ObjectType()
export class RateType implements Rate {
    @Field({ nullable: true })
    id: string;

    @Field()
    characteristics: string;

    @Field()
    value: number;

    @Field(() => PremiumType, { nullable: true })
    premium: Premium;
}

@ObjectType()
export class PremiumType implements Premium {
    @Field({ nullable: true })
    id: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description: string;

    @Field()
    limit: number;

    @Field(() => [RateType], { nullable: true })
    rates: RateType[];
}
