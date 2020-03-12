import { Injectable } from '@angular/core';
import { CountryWeather } from 'src/assets/models/models';
import { HttpClient } from '@angular/common/http';
import { API_URL, API_KEY } from 'src/assets/Enums/enums';

@Injectable()

export class weatherService {
    private weatherCountry: CountryWeather;

    constructor(public httpClient: HttpClient) { }

    getWeather(country: string): any {
        this.httpClient.get(`${API_URL}${country}&appid=${API_KEY}`).subscribe(
            res => {
                const weatherObj = JSON.parse(JSON.stringify(res));
                console.log(weatherObj);

                return res;
            },
            error => {
                console.log(error)
            })
    }
}
