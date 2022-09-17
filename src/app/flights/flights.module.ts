import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightComponent } from '../components/flight/flight.component';
import { FlightsListComponent } from '../components/flights-list/flights-list.component';

import {MatTableModule} from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlightPageComponent } from './flight-page/flight-page.component';
import { SharedModule } from '../shared/shared.module';
import { PortalModule } from '../portal/portal.module';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FlightsComponent,
    FlightComponent,
    FlightsListComponent,
    FlightPageComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatIconModule,
    SharedModule,
    PortalModule,
    TranslateModule
  ],
  exports:[
    FlightComponent,
    FlightsListComponent,
    FlightPageComponent
  ]
})
export class FlightsModule { }
