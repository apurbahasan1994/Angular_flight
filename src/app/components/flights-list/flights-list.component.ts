import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from 'src/app/models/flight.model';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CompanyNamae } from 'src/app/enums/company-namae';
import { FlightType } from 'src/app/enums/flight-type';
import { TravelType } from 'src/app/enums/travel-type';
const ELEMENT_DATA: Flight[] = [
  {
    idFlight: 1,
    companyName: CompanyNamae.AIRFRANCE,
    flightType: FlightType.CONNECTING,
    travelType:TravelType.ONEWAYTICKET,
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Paris',
    arrivalLocation: 'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircrftType: 'Airbas',
  },
  {
    idFlight: 2,
    companyName:CompanyNamae.AIRARABIA,
    flightType:FlightType.DIRECT,
    travelType:TravelType.ROUNDTRIP,
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Paris',
    arrivalLocation: 'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircrftType: 'Airbas',
  },
];
@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css'],
})
export class FlightsListComponent implements OnInit {
  flights: MatTableDataSource<Flight> = new MatTableDataSource<Flight>(
    ELEMENT_DATA
  );
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    'select',
    'idFlight',
    'companyName',
    'flightType',
    'travelType',
    'departureDate',
    'departureTime',
    'arrivalDate',
    'arrivalTime',
    'backDate',
    'backTime',
    'departureLocation',
    'arrivalLocation',
    'flightDuration',
    'connectionDuration',
    'aircrftType',

  ];
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.flights.paginator = this.paginator;
    this.flights.sort = this.sort;
  }
}
