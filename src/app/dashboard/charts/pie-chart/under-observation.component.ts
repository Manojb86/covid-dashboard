import { Component } from '@angular/core';
import { HealthApiService } from 'src/app/services/health-api.service';

@Component({
    selector: 'app-under-observation',
    templateUrl: './under-observation.component.html',
    styleUrls: ['./under-observation.component.scss']
})
export class UnderObservationComponent {
  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#C7B42C', '#a8385d']
  };

  constructor(private healthApiService: HealthApiService) {
    this.healthApiService.getCurrentStatistical().subscribe((data: {}) => {
        this.getUnderObservationData(data);
       });
  }

  ngOnInit() {
    
  }
  
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getUnderObservationData(statisticsData: { data?: any; }) {
    let localCount: number = 0;
    let foreignersCount: number = 0;
    console.log(statisticsData);
    statisticsData.data.hospital_data.forEach((element: { treatment_local: number; treatment_foreign: number; }) => {
        localCount += element.treatment_local;
        foreignersCount += element.treatment_foreign;
    });
    
    let single = [
        {
          "name": "Sri Lankans Patients",
          "value": localCount
        },
        {
          "name": "Foreigners",
          "value": foreignersCount
        }
      ]

      console.log(single);
      Object.assign(this, {single});
      console.log(this);

    }
}