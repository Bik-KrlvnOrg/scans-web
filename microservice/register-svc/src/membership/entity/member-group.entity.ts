import { GroupEntity } from "src/groups/entity/group.entity";
import { AbstractEntity } from "src/libs";
import { Entity, Column, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { MemberEntity } from "./member.entity";

@Entity({ name: 'membership_group' })
export class MemberGroupEntity extends AbstractEntity {
    @Column()
    principalId: string

    @Column()
    premiumId: string

    @OneToOne(() => GroupEntity, group => group, { cascade: true })
    @JoinColumn()
    group: GroupEntity

    @OneToMany(() => MemberEntity, member => member.group)
    members: MemberEntity[]
}
