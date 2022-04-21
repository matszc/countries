import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {

  transform(value: number): string {
    const bilion = 1000000000;
    const million = 1000000;
    if(value > bilion) {
      return `${(value / bilion).toFixed(2)} B`
    }
    if(value > million) {
      return `${(value / million).toFixed(2)} M`
    }
    let val = ''
    let str = `${value}`;
    while (str) {
      val = `,${str.slice(-3)}${val}`;
      str = str.substring(0, str.length - 3);
    }

    return val.substring(1);
  }

}
