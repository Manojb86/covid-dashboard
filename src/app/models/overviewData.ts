import { HospitalPatientData } from './hospitalPatientData';

export interface OverviewData {
    update_date_time: string,
    local_new_cases: number,
    local_total_cases: number,
    local_deaths: number,
    local_new_deaths: number,
    local_recovered: number,
    hospital_data: HospitalPatientData,
}