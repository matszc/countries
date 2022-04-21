import { Pipe, PipeTransform } from '@angular/core';
import {CountryModel} from "../models/country.model";
import {CountryNameModel} from "../models/country-name.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: CountryModel[], searchVal: string): CountryModel[] {
    if (searchVal === "") {
      return value;
    }
    return value.filter(obj => {
      return obj.name.common.toLowerCase().includes(searchVal.toLowerCase());
    });
  }

}
