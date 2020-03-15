import { Component, OnInit } from '@angular/core';
import { CountryWeather } from 'src/assets/models/models';
import { weatherService } from 'src/services/weather.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-management-component',
  templateUrl: './management-component.component.html',
  styleUrls: ['./management-component.component.css'],
  providers: [weatherService]
})

export class ManagementComponent implements OnInit {
  public countries: Array<CountryWeather> = [];
  public country: string = '';
  public errorCountry: boolean = false;

  constructor(private _weatherService: weatherService, private _router:Router) { }

  ngOnInit(): void {
    this.getWeatherAll();
  }


  public addWeather(countryAdd: CountryWeather) {
    this._weatherService.addWeather(countryAdd).subscribe(
      res => {
        console.log('Add country Success');
      },
      error => {
        console.log(error);
      })
  }

  public deleteWeather(id: number) {
    this._weatherService.deleteWeather(id).subscribe(
      res => {
        console.log(`Delete OK id = ${id}`);
        this.getWeatherAll();
      },
      error => {
        console.log(error);
      })
  }


  public getWeather(country: string) {
    this._weatherService.getWeather(country).subscribe(
      res => {
        const weatherObj = JSON.parse(JSON.stringify(res));
        const countryRes: CountryWeather = new CountryWeather(
          weatherObj.id,
          weatherObj.name,
          weatherObj.sys.country,
          weatherObj.weather,
          weatherObj.main,
          weatherObj.wind
        );

        this.countries.push(countryRes);
        this.addWeather(countryRes);
      },
      error => {
        console.log(error);
      })
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

  public requestWeather() {
    this.errorCountry = this.country === '' ? true : false;
    if (!this.errorCountry){
      this.getWeather(this.country);
      this.country = '';
      document.getElementById("country").focus();
    }
  }

  onChange(event: any) {
    this.errorCountry = false;
  }

  goToList(){
    this._router.navigate(['/weather-list']);
  }


}
