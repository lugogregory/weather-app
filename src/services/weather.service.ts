import { Injectable } from '@angular/core';
import { CountryWeather } from 'src/assets/models/models';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class weatherService {
    private weatherCountry: CountryWeather;
    private APIKey = '880bdcd1a80167dfb281be657986ba66';

    constructor (public httpClient: HttpClient) {}

    getWeather(country: string): void {
        this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=caracas&appid=880bdcd1a80167dfb281be657986ba66').subscribe((res)=>{
            console.log(res);
        });
    }
}
