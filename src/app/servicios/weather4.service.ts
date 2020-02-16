import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Weather4Service {
  apiKey4 = '9ab7a761f562a752151f103b133a3a6e';
  URI4: string = '';

  constructor(private http: HttpClient ) { 
    this.URI4 = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey4}&units=metric&q=`
  }

  getWeather4( cityName: string, countryCode: string ){
    return this.http.get(`${this.URI4}${cityName},${countryCode}`);
  }
}
