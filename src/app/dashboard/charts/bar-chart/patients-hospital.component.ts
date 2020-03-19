import { Component } from '@angular/core';
import { HealthApiService } from 'src/app/services/health-api.service';

@Component({
    selector: 'app-patients-hospital',
    templateUrl: './patients-hospital.component.html',
    styleUrls: ['./patients-hospital.component.scss']
})
export class PatientsHospitalComponent {
  single: any[];
  multi: any[];

  //view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Hospitals';
  showYAxisLabel = true;
  yAxisLabel = 'Patients Count';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FA9906',
              '#FA2306', '#06FA38', '#E190AB', '#06DEFA', '#0665FA',
              '#A906FA', '#FA06E7', '#AA4BBF', '#7DBF4B', '#FA0696',
              '#BF8F4B', '#704BBF'
            ]
  };

  constructor(private healthApiService: HealthApiService) {
    this.healthApiService.getCurrentStatistical().subscribe((data: {}) => {
        this.getUnderObservationData(data);
       });
  }

  onSelect(event) {
  }

  getUnderObservationData(statisticsData: { data?: any; }) {
    let single: any = [];
    statisticsData.data.hospital_data.forEach((element) => {
        let countByHospital = {
            "name": element.hospital.name,
            "value": element.treatment_total
        };

        single.push(countByHospital);
    });
    
      Object.assign(this, {single});
    }
}