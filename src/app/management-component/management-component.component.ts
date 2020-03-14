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
  public countries: Array<CountryWeather> = [];
  public country: string = '';
  public errorCountry: boolean = false;

  constructor(private _weatherService: weatherService) { }

  ngOnInit(): void {
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


}
