import {Component, Input, OnInit} from '@angular/core';
import {CountryModel} from "../../models/country.model";

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  @Input()
  countries: CountryModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
