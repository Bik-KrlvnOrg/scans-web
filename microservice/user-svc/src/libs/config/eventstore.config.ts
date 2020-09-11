import { EventStoreOptionsFactory, EventStoreModuleOptions } from "@juicycleff/nestjs-event-store";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EventStoreConfig implements EventStoreOptionsFactory {
    constructor(private readonly configService: ConfigService) { }

    createEventStoreOptions(connectionName?: string): Promise<EventStoreModuleOptions> {
        return this.configService.get('database')
    }
}