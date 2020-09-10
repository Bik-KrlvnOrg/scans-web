import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RpcException } from "@nestjs/microservices";
import { GetCoversQuery } from "../impl";
import { CoverRepository } from "src/cover/repository/cover.repository";
import { ListCoversResponse } from "src/_proto/benefit";

@QueryHandler(GetCoversQuery)
export class GetCoversHandler implements IQueryHandler<GetCoversQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(CoverRepository)
        private readonly coverRepository: CoverRepository,
    ) { }

    async execute(query: GetCoversQuery): Promise<ListCoversResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const covers = await this.coverRepository.find({relations:['premium']})
            console.log('covers',JSON.stringify(covers))
            return { covers }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, code: 500 })
        }
    }

}