import { Pipe, PipeTransform } from '@angular/core';
import { FlightType } from 'src/app/enums/flight-type';

@Pipe({
  name: 'flightType'
})
export class FlightTypePipe implements PipeTransform {

  transform(value:number): string {
    return FlightType[value];
  }

}
