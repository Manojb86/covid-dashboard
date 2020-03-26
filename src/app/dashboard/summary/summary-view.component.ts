import { Component } from '@angular/core';
import { HealthApiService } from 'src/app/services/health-api.service';
import { SummaryData } from 'src/app/models/summaryData';

@Component({
    selector: 'app-summary-view',
    templateUrl: './summary-view.component.html',
    styleUrls: ['./summary-view.component.scss']
})
export class SummaryViewComponent{
    summaryData: any;
    constructor(private healthApiService: HealthApiService) { 
        this.healthApiService.getCurrentStatistical().subscribe((data: {}) => {
            this.summaryData = this.updateSummaryData(data);
           });
    }

    ngOnInit() {
       
    }

    updateSummaryData(statisticsData: { data?: any; }): SummaryData {
        let count: SummaryData = {
            newCases: statisticsData.data.local_new_cases,
            activeCases: statisticsData.data.local_active_cases,
            totalCases: statisticsData.data.local_total_cases,
            recoveredCases: statisticsData.data.local_recovered,
            totalDeaths: statisticsData.data.local_new_deaths,
            dataUpdateDate: statisticsData.data.update_date_time,
            totalDiscoveredCases: statisticsData.data.local_total_cases + statisticsData.data.local_recovered + statisticsData.data.local_new_deaths,
            criticalCases: 3,
            underObservation: statisticsData.data.local_total_number_of_individuals_in_hospitals
        };

        return count;
    }

    getUnderObservationCount(hospitalData: any): number {
        let underObservationCount: number = 0;
        hospitalData.forEach(element => {
            underObservationCount += element.treatment_total;
        });
        
        return underObservationCount;
    }
}