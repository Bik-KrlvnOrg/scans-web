import { Column, Entity, Unique } from "typeorm";
import { AbstractEntity } from "src/libs/entity";

@Entity({ name: 'medical' })
export class MedicalEntity extends AbstractEntity {


    @Column({ unique: true })
    name: string;

    @Column({type:'real'})
    value: number;
}