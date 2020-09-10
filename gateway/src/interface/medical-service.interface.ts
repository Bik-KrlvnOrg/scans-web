import { Observable } from "rxjs";
import { CreateMedicalRequest, FindMedialsRequest, ListMedicalResponse, MedicalSuccessResponse } from "src/_proto/register";
import { RemoveMedicalInputDto, UpdateMedicalInputDto } from "src/dto/medical.dto";

export interface IMedicalRpcService {
    createMedical(createMedicalRequest: CreateMedicalRequest): Observable<MedicalSuccessResponse>
    getMedicals(findRequest: FindMedialsRequest): Observable<ListMedicalResponse>
    deleteMedical(findRequest: RemoveMedicalInputDto): Observable<MedicalSuccessResponse>
    updateMedical(updateRequest: UpdateMedicalInputDto): Observable<MedicalSuccessResponse>
}