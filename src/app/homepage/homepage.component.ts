import { WeatherService } from './../service/weather.service';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ RouterLink, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  citta: string = '';
  weather: any;

  constructor ( private weatherSvc: WeatherService ){}

  search(){
    this.weatherSvc.getWeather(this.citta)
      .subscribe(data => { // il subscribe "avviene" se la chiamata http ha successo
        this.weather = data; // assegna i dati ricevuti al componente weather
      },
      (error) => {
        console.error('Errore durante la richiesta meteorologica:', error);
      });
    this.citta = '';
  }

}
