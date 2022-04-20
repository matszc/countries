import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {CountryModel} from "../models/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _countryList: CountryModel[] = [];
  get countryList(): CountryModel[] {
    return this._countryList;
  }

  constructor(
    private http: HttpClient
  ) { }

  getCountries(region: string): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(`https://restcountries.com/v3.1/region/${region}`)
      .pipe(
        tap(v => this._countryList = v)
      )
  }
}
