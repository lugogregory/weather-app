import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, API_KEY } from 'src/assets/Enums/enums';
import { Observable } from 'rxjs';


@Injectable()

export class weatherService {
    constructor(public httpClient: HttpClient) { }

    getWeather(country: string): Observable<any> {
        return this.httpClient.get(`${API_URL}${country}&appid=${API_KEY}`)
    }
}
