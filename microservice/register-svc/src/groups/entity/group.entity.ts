import { AbstractEntity } from "src/libs";
import { Entity, Column } from "typeorm";

@Entity({ name: 'register_group' })
export class GroupEntity extends AbstractEntity {
    @Column()
    name: string

    @Column({ default: 'none' })
    description: string
}
