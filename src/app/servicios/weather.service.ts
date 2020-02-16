import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '9ab7a761f562a752151f103b133a3a6e';
  URI: string = '';

  constructor( private http: HttpClient ) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`
  }

  getWeather( cityName: string, countryCode: string ){
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}
