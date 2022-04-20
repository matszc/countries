import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CountryModel} from "../../countries/models/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) {
  }

  getCountry(region: string, country: string): Observable<CountryModel | undefined> {
    return this.http.get<CountryModel[]>(`https://restcountries.com/v3.1/region/${region}`)
      .pipe(
        map(v => v.find(({name}) => name.common.toLowerCase() === country.toLowerCase())),
      )
  }
}
