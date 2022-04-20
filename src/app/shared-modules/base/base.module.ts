import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstLetterUppercasePipe} from "./pipes/first-letter-uppercase.pipe";
import {JoinPipe} from "./pipes/join.pipe";
import {ToMapPipe} from './pipes/to-map.pipe';


@NgModule({
  declarations: [
    FirstLetterUppercasePipe,
    JoinPipe,
    ToMapPipe
  ],
  exports: [
    JoinPipe,
    FirstLetterUppercasePipe,
    ToMapPipe
  ],
  imports: [
    CommonModule
  ]
})
export class BaseModule {
}
