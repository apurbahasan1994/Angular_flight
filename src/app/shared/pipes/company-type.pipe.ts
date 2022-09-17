import { Pipe, PipeTransform } from '@angular/core';
import { CompanyNamae } from 'src/app/enums/company-namae';

@Pipe({
  name: 'companyType'
})
export class CompanyTypePipe implements PipeTransform {

  transform(value: number): string {
    return CompanyNamae[value];
  }

}
