import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeService } from 'app/bike.service';
import { RegComponent } from './reg/reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingsComponent } from './listings/listings.component';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    DashboardComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
