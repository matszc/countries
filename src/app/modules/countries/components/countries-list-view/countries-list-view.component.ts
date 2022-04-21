import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountryModel} from "../../models/country.model";

@Component({
  selector: 'app-countries-list-view',
  templateUrl: './countries-list-view.component.html',
  styleUrls: ['./countries-list-view.component.scss']
})
export class CountriesListViewComponent implements OnInit {

  readonly titlePrefix: string = 'Region: ';
  regionName: string = '';
  countries: CountryModel[] = []

  filter: string = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.regionName = this.route.snapshot.paramMap.get('region') as string;
    this.countries = this.route.snapshot.data['countries'];
  }

  applyFilter(val: string) {
    this.filter = val;
  }

}
