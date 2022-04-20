import { Component, OnInit } from '@angular/core';
import {RegionsService} from "../../services/regions.service";
import {Observable} from "rxjs";
import {RegionModel} from "../../models/region.model";

@Component({
  selector: 'app-region-list-view',
  templateUrl: './region-list-view.component.html',
  styleUrls: ['./region-list-view.component.scss']
})
export class RegionListViewComponent implements OnInit {

  regions$: Observable<RegionModel[]> | undefined;

  constructor(
    private regionsService: RegionsService
  ) { }

  ngOnInit(): void {
    this.regions$ = this.regionsService.getRegions();
  }

}
