import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionListViewComponent } from './components/region-list-view/region-list-view.component';
import {CardModule} from "../../shared-modules/card/card.module";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RegionListViewComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    CardModule,
    FlexModule,
    MatButtonModule
  ]
})
export class RegionModule { }
