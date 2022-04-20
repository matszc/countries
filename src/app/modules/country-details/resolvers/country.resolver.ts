import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {CountryModel} from "../../countries/models/country.model";
import {Injectable} from "@angular/core";
import {CountryService} from "../services/country.service";
import {catchError, map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryResolver implements Resolve<CountryModel> {

  constructor(
    private countryService: CountryService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryModel> | Promise<CountryModel> | CountryModel {
    const region: string = route.paramMap.get('region') as string;
    const country: string = route.paramMap.get('country') as string;
    return this.countryService.getCountry(region, country)
      .pipe(
        tap(v => {
          if (v === undefined) throw new Error('Country does not exists')
        }),
        catchError(err => {
          this.router.navigate(['regions', region])
          throw err;
        }),
        map(v => v as CountryModel)
      )
  }
}
