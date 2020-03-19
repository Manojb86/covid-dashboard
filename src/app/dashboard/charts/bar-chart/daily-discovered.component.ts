import { Component } from '@angular/core';
import { single } from 'src/app/data/dailyDiscoveredPatients';

@Component({
    selector: 'app-daily-discovered',
    templateUrl: './daily-discovered.component.html',
    styleUrls: ['./daily-discovered.component.scss']
})
export class DailyDiscoveredComponent {
    single: any[];
    multi: any[];
  
    view: any[] = [700, 400];
  
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Time';
    showYAxisLabel = true;
    yAxisLabel = 'Patients Count';
  
    colorScheme = {
      domain: ['#AAAAAA']
    };
  
    constructor() {
      Object.assign(this, { single })
    }
  
    onSelect(event) {
      console.log(event);
    }
}