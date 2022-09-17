import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FlightPageComponent } from './flights/flight-page/flight-page.component';

const routes: Routes = [
  {path:'search',component:SearchFormComponent},
  {path:'list',component:FlightsListComponent},
  {path:'flight',component:FlightPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
