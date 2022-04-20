import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {RegionModel} from "../models/region.model";

const regions: RegionModel[] = [
  {
    name: 'Africa',
  },
  {
    name: 'Americas'
  },
  {
    name: 'Asia'
  },
  {
    name: 'Europe'
  },
  {
    name: 'Oceania'
  }
]

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(
  ) { }

  getRegions(): Observable<RegionModel[]> {
    return of(regions);
  }
}
