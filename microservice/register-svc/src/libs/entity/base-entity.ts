import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

import {BaseEntity} from 'typeorm'
export abstract class AbstractEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    modifiedAt: Date
}