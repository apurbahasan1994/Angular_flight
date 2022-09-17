import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlightType } from 'src/app/enums/flight-type';
import { TravelType } from 'src/app/enums/travel-type';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  companies:string[]=[];
  trips:string[]=[];
  flightTypes:string[]=[]
  showConnection = true;
  showBack = true;
  searchFlilghtForm: FormGroup = new FormGroup({});
  timeTheme = {
    container: {
      bodyBackgroundColor: '#3f51b5',
      buttonColor: '#fff',
    },
  };

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.createSearchCritiesForm();
    this.searchFlilghtForm = this.sharedService.searchCritiesForm;
    this.sharedService.initDropDown();
    this.companies=this.sharedService.companies;
    this.trips=this.sharedService.trips;
    this.flightTypes=this.sharedService.flightTypes;
  }
  selectedTripType(value: any) {
    debugger;
    if (value == "ONEWAYTICKET") {
      this.showConnection = false;
    } else {
      this.showConnection = true;
    }
  }
  selectedFlightType(value: any) {
    debugger;

    if (value == "DIRECT") {
      this.showBack = false;
    } else {
      this.showBack = true;
    }
  }
}
