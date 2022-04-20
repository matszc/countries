import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutContainerComponent} from "./components/layout-container/layout-container.component";

const routes: Routes = [
  {
    path: '', component: LayoutContainerComponent, children: [
      {
        path: '', redirectTo: 'regions', pathMatch: 'full',
      },
      {
        path: 'regions', loadChildren: () => import('../region/region.module').then(m => m.RegionModule)
      },
      {
        path: 'regions/:region',
        loadChildren: () => import('../countries/countries.module').then(m => m.CountriesModule),
      },
      {
        path: 'regions/:region/:country',
        loadChildren: () => import('../country-details/country-details.module').then(m => m.CountryDetailsModule)
      },
      {
        path: '**', redirectTo: 'regions'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutContainerRoutingModule { }
