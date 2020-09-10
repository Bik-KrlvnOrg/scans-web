import { Module } from '@nestjs/common';
import { MedicalService } from './medical.service';
import { MedicalController } from './medical.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRepository } from './repository/medical.repository';
import { CreateMedicalHandler, DeleteMedicalHandler, UpdateMedicalHandler } from './command';
import { MedicalCreatedHandler, MedicalDeletedHandler, MedicalUpdatedHandler } from './event';
import { GetMedicalsHandler, GetMedicalHandler } from './query';
import { CheckEntityService } from 'src/libs/service';


const CommandHandlers = [CreateMedicalHandler, DeleteMedicalHandler, UpdateMedicalHandler]
const EventHandlers = [MedicalCreatedHandler, MedicalDeletedHandler, MedicalUpdatedHandler]
const QueryHandlers = [GetMedicalsHandler,GetMedicalHandler]

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([MedicalRepository]),
  ],
  providers: [
    MedicalService,
    CheckEntityService,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ],
  controllers: [MedicalController]
})
export class MedicalModule { }
