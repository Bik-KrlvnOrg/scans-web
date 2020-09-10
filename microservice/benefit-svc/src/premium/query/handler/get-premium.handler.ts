import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RpcException } from "@nestjs/microservices";
import { PremiumRepository } from "src/premium/repository/premium.repository";
import { Premium } from "src/_proto/benefit";
import { GetPremiumQuery } from "../impl";

@QueryHandler(GetPremiumQuery)
export class GetPremiumHandler implements IQueryHandler<GetPremiumQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(PremiumRepository)
        private readonly premiumRepository: PremiumRepository,
    ) { }

    async execute(query: GetPremiumQuery): Promise<Premium> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const premium = await this.premiumRepository.findOne({ id: request }, { relations: ['rates'] })
            console.log('pr',premium)
            if (!premium) throw new RpcException({ message: 'premium not found', code: 404 })
            return premium
        } catch (err) {
            this.logger.log(err)
            throw new RpcException(err.message)
        }
    }

}