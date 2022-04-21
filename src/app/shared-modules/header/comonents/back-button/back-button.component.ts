import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";
import {filter, Observable, tap} from "rxjs";
import {BackLocationRouteService} from "../../services/back-location-route.service";

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  url$: Observable<string> | undefined;

  constructor(
    private backLocationRouteService: BackLocationRouteService
  ) { }

  ngOnInit(): void {
    this.url$ = this.backLocationRouteService.backLocation$;
  }

}
