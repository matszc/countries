import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AboutMeModel} from "../models/about-me.model";

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(
    private http: HttpClient
  ) { }

  getInfo(): Observable<AboutMeModel> {
    return this.http.get<AboutMeModel>('/assets/aboutme.json')
  }
}
