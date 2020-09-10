import { Column, OneToMany, Entity, BeforeInsert } from "typeorm";
import { MemberEntity } from "../../membership/entity/member.entity";
import { Exclude, classToPlain } from 'class-transformer'
import { generateHashPassword } from "src/libs/utils";
import { AbstractEntity } from "src/libs/entity";
import { IsEmail } from 'class-validator'
@Entity({ name: 'sponsor' })
export class SponsorEntity extends AbstractEntity {
    @Column()
    name: string;

    @Column()
    relationship: string;

    @Column()
    contact: string;

    @IsEmail()
    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string

    @Column()
    residentialAddress: string;

    @Column()
    postalAddress: string;

    @OneToMany(() => MemberEntity, (member) => member.sponsor)
    members: MemberEntity[]

    @BeforeInsert()
    async hashPassword(): Promise<void> {
        this.password = generateHashPassword(this.password)
    }

    toJSON(): Record<string, any> {
        return classToPlain(this)
    }
}