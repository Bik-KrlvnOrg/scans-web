import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RpcException } from "@nestjs/microservices";
import { PremiumRepository } from "src/premium/repository/premium.repository";
import { ListPremiumsResponse } from "src/_proto/benefit";
import { GetPremiumsQuery } from "../impl";

@QueryHandler(GetPremiumsQuery)
export class GetPremiumsHandler implements IQueryHandler<GetPremiumsQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(PremiumRepository)
        private readonly premiumRepository: PremiumRepository,
    ) { }

    async execute(query: GetPremiumsQuery): Promise<ListPremiumsResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const premiums = await this.premiumRepository.find({relations:['rates']})
            console.log('pres',JSON.stringify(premiums))
            return { premiums }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException(err.message)
        }
    }

}