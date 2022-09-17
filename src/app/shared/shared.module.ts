import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../components/search-form/search-form.component';

import { MatSelectModule } from '@angular/material/select';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { TravelTypePipe } from './pipes/travel-type.pipe';
import { CompanyTypePipe } from './pipes/company-type.pipe';
import { FlightTypePipe } from './pipes/flight-type.pipe';
import { ReplaceNullValuePipe } from './pipes/replace-null-value.pipe';
@NgModule({
  declarations: [SearchFormComponent, TravelTypePipe, CompanyTypePipe, FlightTypePipe, ReplaceNullValuePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    MatButtonModule,
    TranslateModule
  ],
  exports: [SearchFormComponent, TravelTypePipe, CompanyTypePipe, FlightTypePipe, ReplaceNullValuePipe],
})
export class SharedModule {}
