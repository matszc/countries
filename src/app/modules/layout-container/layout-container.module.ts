import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutContainerRoutingModule } from './layout-container-routing.module';
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutContainerComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutContainerRoutingModule
  ]
})
export class LayoutContainerModule { }
