import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CountryDetailsRoutingModule} from './country-details-routing.module';
import {CountryDetailsViewComponent} from './components/country-details-view/country-details-view.component';
import {CardModule} from "../../shared-modules/card/card.module";
import {MatDividerModule} from "@angular/material/divider";
import {FlexModule} from "@angular/flex-layout";
import {BaseModule} from "../../shared-modules/base/base.module";
import { PopulationPipe } from './pipes/population.pipe';


@NgModule({
  declarations: [
    CountryDetailsViewComponent,
    PopulationPipe
  ],
  imports: [
    CommonModule,
    CountryDetailsRoutingModule,
    CardModule,
    MatDividerModule,
    FlexModule,
    BaseModule
  ]
})
export class CountryDetailsModule {
}
