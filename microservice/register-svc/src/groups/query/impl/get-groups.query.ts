import { IQuery } from "@nestjs/cqrs";

export class GetGroupsQuery implements IQuery {
    constructor(public readonly request: any) { }
}