import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesListViewComponent } from './components/countries-list-view/countries-list-view.component';
import { FirstLetterUppercasePipe } from './pipes/first-letter-uppercase.pipe';
import {CardModule} from "../../shared-modules/card/card.module";
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { JoinPipe } from './pipes/join.pipe';


@NgModule({
  declarations: [
    CountriesListViewComponent,
    FirstLetterUppercasePipe,
    CountriesListComponent,
    JoinPipe
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    CardModule,
    MatListModule,
    MatIconModule
  ]
})
export class CountriesModule { }
