import { Entity, Column, ManyToOne } from "typeorm"
import { AbstractEntity } from "src/libs"
import { PremiumEntity } from "src/premium/entity/premium.entity"

@Entity({ name: 'rate' })
export class RateEntity extends AbstractEntity {
    @Column()
    characteristics: string

    @Column({ type: 'real' })
    value: number

    @ManyToOne(() => PremiumEntity, premium => premium.rates)
    premium: PremiumEntity
}
