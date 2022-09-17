import { CompanyNamae } from "../enums/company-namae";
import { FlightType } from "../enums/flight-type";
import { TravelType } from "../enums/travel-type";

export class Flight {
  idFlight:number;
  companyName:CompanyNamae;
  flightType:FlightType;
  travelType:TravelType;
  departureDate:Date;
  departureTime:Date;
  arrivalDate:Date;
  arrivalTime:Date;
  backDate:Date;
  backTime:Date;
  departureLocation:string;
  arrivalLocation:string;
  flightDuration:Date;
  connectionDuration:Date;
  aircrftType:string;
}
