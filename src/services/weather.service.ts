import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL, API_KEY, URL_JSONSERVER } from 'src/assets/Enums/enums';
import { Observable, of } from 'rxjs';
import { CountryWeather } from 'src/assets/models/models';


@Injectable({
    providedIn: 'root'
})

export class weatherService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(public httpClient: HttpClient) { }

    // Get data weather from API weather
    getWeather(country: string): Observable<any> {
        return this.httpClient.get(`${API_URL}${country}&appid=${API_KEY}`)
    }

    // JSON SERVER
    getWeatherAll(): Observable<CountryWeather[]> {
        return this.httpClient.get<CountryWeather[]>(URL_JSONSERVER);
    }

    addWeather(countryAdd: CountryWeather): Observable<CountryWeather> {
        return this.httpClient.post<CountryWeather>(URL_JSONSERVER, countryAdd, this.httpOptions);
    }

    getWeatherDetail(id: number): Observable<CountryWeather> {
        const url = `${URL_JSONSERVER}/${id}`;
        return this.httpClient.get<CountryWeather>(url);
    }

    searchWeather(term: string): Observable<CountryWeather[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.httpClient.get<CountryWeather[]>(`${URL_JSONSERVER}/?nameLocation=${term}`);
    }

    deleteWeather(country: CountryWeather | number): Observable<CountryWeather> {
        const id = typeof country === 'number' ? country : country.id;
        const url = `${URL_JSONSERVER}/${id}`;

        return this.httpClient.delete<CountryWeather>(url, this.httpOptions);
    }


}
