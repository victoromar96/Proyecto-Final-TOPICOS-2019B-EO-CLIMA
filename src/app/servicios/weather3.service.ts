import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Weather3Service {

  apiKey3 = '9ab7a761f562a752151f103b133a3a6e';
  URI3: string = '';

  constructor( private http: HttpClient) { 
    this.URI3 = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey3}&units=metric&q=`
  }

  getWeather3( cityName: string, countryCode: string ){
    return this.http.get(`${this.URI3}${cityName},${countryCode}`);
  }
}
