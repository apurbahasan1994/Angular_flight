import { Pipe, PipeTransform } from '@angular/core';
import { TravelType } from 'src/app/enums/travel-type';

@Pipe({
  name: 'travelType'
})
export class TravelTypePipe implements PipeTransform {

  transform(value: number): unknown {
    return TravelType[value];
  }

}
