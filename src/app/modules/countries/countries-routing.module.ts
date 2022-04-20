import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountriesListViewComponent} from "./components/countries-list-view/countries-list-view.component";
import {CountriesListResolver} from "./resolvers/countries-list.resolver";

const routes: Routes = [
  {
    path: '', component: CountriesListViewComponent, resolve: {
      countries: CountriesListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
