
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm'
import { SponsorEntity } from '../../sponsor/entity/sponsor.entity';
import { AbstractEntity } from 'src/libs/entity';
import { MemberGroupEntity } from './member-group.entity';
import { MedicalEntity } from 'src/medical/entity/medical.entity';

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
    gender: string

    @Column()
    relationship: string;

    @Column()
    residentialAddress: string;

    @Column()
    rateId: string

    @Column()
    premiumId:string

    @OneToMany(() => MedicalEntity, medical => medical)
    medicals: MedicalEntity[]

    @ManyToOne(() => MemberGroupEntity, group => group.members)
    group: MemberGroupEntity


    @ManyToOne(() => SponsorEntity, (sponsor) => sponsor.members)
    sponsor: SponsorEntity
}