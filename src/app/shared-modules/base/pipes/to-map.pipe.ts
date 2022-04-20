import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toMap'
})
export class ToMapPipe implements PipeTransform {

  transform<T>(value: { [key: string]: T }): Map<string, T> {
    return new Map<string, T>(Object.keys(value).map(key => [key, value[key]]))
  }

}
