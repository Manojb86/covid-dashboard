import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardViewComponent } from './dashboard/dashboard-view.component';
import { SummaryViewComponent } from './dashboard/summary/summary-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    SummaryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
