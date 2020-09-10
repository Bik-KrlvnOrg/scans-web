import { AbstractEntity } from "src/libs";
import { Entity, Column, OneToMany } from "typeorm";
import { CoverEntity } from "src/cover/entity/cover.entity";
import { RateEntity } from "../rate/entity/rate.entity";

@Entity({ name: 'premium' })
export class PremiumEntity extends AbstractEntity {
    @Column({ unique: true })
    name: string

    @Column()
    description: string

    @OneToMany(() => RateEntity, rate => rate.premium)
    rates: RateEntity[]

    @Column({ type: 'real' })
    limit: number

    @OneToMany(() => CoverEntity, (cover) => cover.premium)
    covers: CoverEntity[]
}
