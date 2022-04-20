import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegionListViewComponent} from "./components/region-list-view/region-list-view.component";

const routes: Routes = [
  {
    path: '', component: RegionListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
