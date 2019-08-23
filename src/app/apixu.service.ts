import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location) {
    return this.http.get(
      'https://api.apixu.com/v1/forecast.json?key=adf631a1b32943df858160912192308&q=' + location + '&days=7'
    );
}

}
