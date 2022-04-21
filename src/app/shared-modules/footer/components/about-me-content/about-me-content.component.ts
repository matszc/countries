import { Component, OnInit } from '@angular/core';
import {Observable, tap} from "rxjs";
import {AboutMeModel} from "../../models/about-me.model";
import {FooterService} from "../../services/footer.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-about-me-content',
  templateUrl: './about-me-content.component.html',
  styleUrls: ['./about-me-content.component.scss']
})
export class AboutMeContentComponent implements OnInit {

  readonly title: string = 'About me'
  data$: Observable<AboutMeModel> | undefined;

  constructor(
    private footerService: FooterService,
    private dialogRef: MatDialogRef<any>
  ) { }

  ngOnInit(): void {
    this.data$ = this.footerService.getInfo();
  }

  close() {
    this.dialogRef.close();
  }

}
