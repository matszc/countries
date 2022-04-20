import {Component, OnInit} from '@angular/core';
import {CountryModel} from "../../../countries/models/country.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-country-details-view',
  templateUrl: './country-details-view.component.html',
  styleUrls: ['./country-details-view.component.scss']
})
export class CountryDetailsViewComponent implements OnInit {

  country: CountryModel;

  constructor(
    private route: ActivatedRoute
  ) {
    this.country = this.route.snapshot.data['country'];
  }

  ngOnInit(): void {
  }

}
