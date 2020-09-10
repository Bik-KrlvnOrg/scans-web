import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RpcException } from "@nestjs/microservices";
import { CoverRepository } from "src/cover/repository/cover.repository";
import { Cover } from "src/_proto/benefit";
import { GetCoverQuery } from "../impl";

@QueryHandler(GetCoverQuery)
export class GetCoverHandler implements IQueryHandler<GetCoverQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(CoverRepository)
        private readonly coverRepository: CoverRepository,
    ) { }

    async execute(query: GetCoverQuery): Promise<Cover> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const cover = await this.coverRepository.findOne({ id: request }, { relations: ['premium'] })
            if (!cover) throw new RpcException({ message: 'cover not found', code: 404 })
            return cover
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ code: 500, message: err.message })
        }
    }

}