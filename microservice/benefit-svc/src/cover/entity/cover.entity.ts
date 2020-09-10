import { AbstractEntity } from "src/libs";
import { Entity, Column, ManyToOne } from "typeorm";
import { PremiumEntity } from "src/premium/entity/premium.entity";
import { PatientType } from "src/libs/common";

@Entity({ name: 'cover' })
export class CoverEntity extends AbstractEntity {
    @Column()
    name: string

    @Column()
    description: string

    @Column({ type: 'real' })
    amount: number

    @Column({ type: 'enum', enum: PatientType, default: PatientType.OUT_PATIENT })
    patientType: PatientType

    @Column()
    coverage: string

    @ManyToOne(() => PremiumEntity, (premium) => premium.covers)
    premium: PremiumEntity

}
