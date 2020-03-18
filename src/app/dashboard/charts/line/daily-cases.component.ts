import { Component } from '@angular/core';
import { multi } from 'src/app/data/dailyCasesData';

@Component({
    selector: 'app-daily-cases',
    templateUrl: './daily-cases.component.html',
    styleUrls: ['./daily-cases.component.scss']
})
export class DailyCasesComponent {
    multi: any[];
    view: any[] = [1500, 600];
  
    // options
    legend: boolean = true;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Time';
    yAxisLabel: string = 'No. of Patients';
    timeline: boolean = true;
  
    colorScheme = {
      domain: ['#E44D25', '#5AA454', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };
  
    constructor() {
      Object.assign(this, { multi });
    }
  
    onSelect(data: any): void {
    }
  
    onActivate(data: any): void {
    }
  
    onDeactivate(data: any): void {
    }
}