import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { DashboardViewComponent } from './dashboard/dashboard-view.component';
import { SummaryViewComponent } from './dashboard/summary/summary-view.component';
import { DailyCasesComponent } from './dashboard/charts/line/daily-cases.component';
import { DataChartComponent } from './dashboard/charts/data-chart.component';
import { UnderObservationComponent } from './dashboard/charts/pie-chart/under-observation.component';
import { PatientsHospitalComponent } from './dashboard/charts/bar-chart/patients-hospital.component';
import { DailyDiscoveredComponent } from './dashboard/charts/bar-chart/daily-discovered.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    SummaryViewComponent,
    DailyCasesComponent,
    DataChartComponent,
    UnderObservationComponent,
    PatientsHospitalComponent,
    DailyDiscoveredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
