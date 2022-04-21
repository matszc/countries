import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, filter, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackLocationRouteService {

  private _backLocation$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get backLocation$(): Observable<string> {
    return this._backLocation$.asObservable();
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(v => {
        let url = '';
        let [route] = this.activatedRoute.root.children;
        while (url === '' && route) {
          if(route.snapshot.data['backLocation']) {
            url = (route.snapshot.data['backLocation'] as string).split('/').map(v =>{
              if(v.startsWith(':')) {
                return route.snapshot.paramMap.get(v.substring(1));
              }
              return v;
            }).join('/')
          }
          [route] = route.children;
        }
        return url;
      })
    ).subscribe(v => {
      this._backLocation$.next(v);
    })
  }

}
