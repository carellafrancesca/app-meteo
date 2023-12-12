import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'fd3066f350a346e038eef840cfe7ae77';

  constructor(private http: HttpClient) { }

  getWeather(citta: string): Observable <any>{
    // Observable : gestione degli eventi asincroni
    // getWeather restituisce un Observable che mostretà i dati solo quando saranno disponibili
    const params = {
      q: citta,
      appid: this.apiKey
    }
    return this.http.get(this.apiUrl, {params});
  }

}
