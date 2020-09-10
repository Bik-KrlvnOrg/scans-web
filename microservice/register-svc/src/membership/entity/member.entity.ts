
import { Entity, Column, ManyToOne } from 'typeorm'
import { SponsorEntity } from '../../sponsor/entity/sponsor.entity';
import { AbstractEntity } from 'src/libs/entity';

@Entity({ name: 'members' })
export class MemberEntity extends AbstractEntity {

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    dob: string;

    @Column()
    contact: string;

    @Column()
    email: string;

    @Column()
    gender:string

    @Column()
    relationship: string;

    @Column()
    residentialAddress: string;


    @ManyToOne(() => SponsorEntity, (sponsor) => sponsor.members)
    sponsor: SponsorEntity
}