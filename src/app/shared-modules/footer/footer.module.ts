import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import { AboutMeButtonComponent } from './components/about-me-button/about-me-button.component';
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import { AboutMeContentComponent } from './components/about-me-content/about-me-content.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [FooterComponent, AboutMeButtonComponent, AboutMeContentComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FlexModule,
    MatDialogModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
