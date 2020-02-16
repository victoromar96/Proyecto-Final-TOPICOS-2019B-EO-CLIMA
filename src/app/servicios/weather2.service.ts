import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Weather2Service {

  apiKey2 = '9ab7a761f562a752151f103b133a3a6e';
  URI2: string = '';

  constructor(private http: HttpClient ) {
    this.URI2 = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey2}&units=metric&q=`
   }

   getWeather2( cityName: string, countryCode: string ){
    return this.http.get(`${this.URI2}${cityName},${countryCode}`);
  }
}
