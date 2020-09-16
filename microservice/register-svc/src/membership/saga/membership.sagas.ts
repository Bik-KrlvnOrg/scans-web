import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { MembersCreatedEvent } from "../event";
import { CreateSponsorCommand } from "../../sponsor/command";
import { SponsorCreatedEvent } from "src/sponsor/event";
import { CreateMemberGroupCommand } from "../command";

@Injectable()
export class MembershipSagas {
    logger = new Logger(this.constructor.name)

    @Saga()
    membersCreated = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(MembersCreatedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event.req.sponsor.members, `Inside [MembershipSagas] Saga`)
                return new CreateSponsorCommand(event.req)
            })
        )
    }

    @Saga()
    sponsorCreated = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(SponsorCreatedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event.data, `Inside [MembershipSagas] Saga`)
                return new CreateMemberGroupCommand(event.data)
            })
        )
    }

}