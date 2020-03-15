import { Component, OnInit } from '@angular/core';
import { CountryWeather } from 'src/assets/models/models';
import { weatherService } from 'src/services/weather.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weather-list-component',
  templateUrl: './weather-list-component.component.html',
  styleUrls: ['./weather-list-component.component.css'],
  providers: [weatherService]
})
export class WeatherListComponent implements OnInit {
  public countries: Array<CountryWeather> = [];

  constructor(private _weatherService: weatherService, private _router:Router) { }

  ngOnInit(): void {
    this.getWeatherAll();
  }

  public getWeatherAll() {
    this._weatherService.getWeatherAll().subscribe(
      res => {
        const weatherAll = JSON.parse(JSON.stringify(res));
        this.countries.length = 0;
        this.countries = weatherAll;
      },
      error => {
        console.log(error);
      })
  }

}
