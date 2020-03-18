import { Hospital } from './hospital';

export interface HospitalPatientData {
    id: number,
    hospital_id: number;
    treatment_local: number,
    treatment_foreign: number,
    treatment_total: number,
    cumulative_total: number,
    hospital: Hospital
}