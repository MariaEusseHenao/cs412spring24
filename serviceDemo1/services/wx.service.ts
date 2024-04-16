import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WxService {

  constructor(private httpClient: HttpClient) {

  }

   getWeather(): Observable<any> {
    return this.httpClient.get("https://api.openweathermap.org/data/3.0/onecall?lat=42.4&lon=-71.0&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial");
  }
}
