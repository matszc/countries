import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CountriesRoutingModule} from './countries-routing.module';
import {CountriesListViewComponent} from './components/countries-list-view/countries-list-view.component';
import {CardModule} from "../../shared-modules/card/card.module";
import {CountriesListComponent} from './components/countries-list/countries-list.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {BaseModule} from "../../shared-modules/base/base.module";


@NgModule({
  declarations: [
    CountriesListViewComponent,
    CountriesListComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    CardModule,
    MatListModule,
    MatIconModule,
    BaseModule
  ]
})
export class CountriesModule { }
