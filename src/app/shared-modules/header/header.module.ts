import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./comonents/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BackButtonComponent } from './comonents/back-button/back-button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import { LogoComponent } from './comonents/logo/logo.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [HeaderComponent, BackButtonComponent, LogoComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
