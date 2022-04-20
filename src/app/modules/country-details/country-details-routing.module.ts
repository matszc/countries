import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryDetailsViewComponent} from "./components/country-details-view/country-details-view.component";
import {CountryResolver} from "./resolvers/country.resolver";

const routes: Routes = [
  {
    path: '', component: CountryDetailsViewComponent,
    resolve: {
      country: CountryResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryDetailsRoutingModule {
}
