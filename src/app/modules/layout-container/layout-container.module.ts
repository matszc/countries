import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutContainerRoutingModule} from './layout-container-routing.module';
import {LayoutContainerComponent} from './components/layout-container/layout-container.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HeaderModule} from "../../shared-modules/header/header.module";
import {FooterModule} from "../../shared-modules/footer/footer.module";


@NgModule({
  declarations: [
    LayoutContainerComponent,
  ],
  imports: [
    CommonModule,
    LayoutContainerRoutingModule,
    MatToolbarModule,
    HeaderModule,
    FooterModule
  ]
})
export class LayoutContainerModule {
}
