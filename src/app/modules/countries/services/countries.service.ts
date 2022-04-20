import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CountryModel} from "../models/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCountries(region: string): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(`https://restcountries.com/v3.1/region/${region}`).pipe(
      map(v => v.sort((a, b) => a.name.common.localeCompare(b.name.common)))
    )
  }
}
