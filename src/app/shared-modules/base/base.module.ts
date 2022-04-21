import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstLetterUppercasePipe} from "./pipes/first-letter-uppercase.pipe";
import {JoinPipe} from "./pipes/join.pipe";
import {ToMapPipe} from './pipes/to-map.pipe';
import {MapPipe} from './pipes/map.pipe';


@NgModule({
  declarations: [
    FirstLetterUppercasePipe,
    JoinPipe,
    ToMapPipe,
    MapPipe
  ],
  exports: [
    JoinPipe,
    FirstLetterUppercasePipe,
    ToMapPipe,
    MapPipe
  ],
  imports: [
    CommonModule
  ]
})
export class BaseModule {
}
