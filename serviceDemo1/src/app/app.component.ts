import { Component } from '@angular/core';
import {WxService} from "../../services/wx.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceDemo1';
  weather: any;

  getWx() {
    //call a service to get wx
    this.WxService.getWeather().subscribe(

      response => {
        this.weather = response['current']['temp']
      }
    )
  }
  //dependency injection in constructor...
  //
  constructor(private WxService: WxService) {
  }
}
