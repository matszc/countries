import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {CountryModel} from "../models/country.model";
import {Injectable} from "@angular/core";
import {CountriesService} from "../services/countries.service";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountriesListResolver implements Resolve<CountryModel[]> {

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryModel[]> | Promise<CountryModel[]> | CountryModel[] {
    return this.countriesService.getCountries(route.paramMap.get('region') as string).pipe(
      catchError(err => {
        this.router.navigate(['regions']);
        throw err;
      })
    )
  }

}
