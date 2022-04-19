import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
