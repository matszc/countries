import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  transform<T>(value: T[], mapFun: (obj: T) => any): any[] {
    return value.map(mapFun);
  }

}
