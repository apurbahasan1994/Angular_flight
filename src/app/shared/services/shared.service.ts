import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyNamae } from 'src/app/enums/company-namae';
import { FlightType } from 'src/app/enums/flight-type';
import { TravelType } from 'src/app/enums/travel-type';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  companies:string[]=[];
  trips:string[]=[];
  flightTypes:string[]=[];
  private _searchCriteresForm: FormGroup;

  constructor() { }
  public get searchCritiesForm(): FormGroup { return this._searchCriteresForm }
  public set searchCritiesForm(value: FormGroup) {
    this._searchCriteresForm = value;
  }
  createSearchCritiesForm() {
    this._searchCriteresForm = new FormGroup({
      company: new FormControl(''),
      flightType: new FormControl(''),
      travelType: new FormControl(''),

      departureLocation: new FormControl(''),
      arrivalLocation: new FormControl(''),
      departureDateMin: new FormControl(''),

      arrivalDateMin: new FormControl(''),
      backDateMin: new FormControl(''),
      departureTimeMin: new FormControl(''),

      arrivalTimeMin: new FormControl(''),
      backTimeMin: new FormControl(''),
      flightDurationMin: new FormControl(''),

      connectionDurationMin: new FormControl(''),
      departureDateMax: new FormControl(''),
      arrivalDateMax: new FormControl(''),

      backDateMax: new FormControl(''),
      departureTimeMax: new FormControl(''),
      arrivalTimeMax: new FormControl(''),
      backTimeMax: new FormControl(''),
      flightDurationMax: new FormControl(''),

      connectionDurationMax: new FormControl(''),
      aircraftType: new FormControl(''),
      fareMin: new FormControl(''),
      fareMax: new FormControl(''),

    })
  }
  initDropDown(){
    const companyKeys=Object.keys(CompanyNamae);
    this.companies=companyKeys.slice(companyKeys.length/2);
    const tripKeys=Object.keys(TravelType);
    this.trips=tripKeys.slice(tripKeys.length/2);
    const flightTypeKeys=Object.keys(FlightType);
    this.flightTypes=flightTypeKeys.slice(flightTypeKeys.length/2);

  }
}
