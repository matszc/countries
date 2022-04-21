import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AboutMeContentComponent} from "../about-me-content/about-me-content.component";

@Component({
  selector: 'app-about-me-button',
  templateUrl: './about-me-button.component.html',
  styleUrls: ['./about-me-button.component.scss']
})
export class AboutMeButtonComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(AboutMeContentComponent, {
      width: '300px'
    });
  }

}
