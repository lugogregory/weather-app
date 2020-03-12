import { Component, OnInit } from '@angular/core';
import { CountryWeather } from 'src/assets/models/models';
import { weatherService } from 'src/services/weather.service';


@Component({
  selector: 'app-management-component',
  templateUrl: './management-component.component.html',
  styleUrls: ['./management-component.component.css'],
  providers: [weatherService]
})

export class ManagementComponent implements OnInit {
  public countries: CountryWeather[] = [];
  constructor(private _weatherService: weatherService) { }

  ngOnInit(): void {
  }

  public getWeather(){
    this._weatherService.getWeather('caracas');
  }

}
