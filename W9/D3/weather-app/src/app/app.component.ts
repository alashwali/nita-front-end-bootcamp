import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weather-app';
  cityName: string = '';
  temperature: number | null = null;
  constructor(private weatherService: WeatherService) {}
  getWeather() {
    if (this.cityName.trim() !== '') {
      this.weatherService
        .getTemperature(this.cityName)
        .then((temperature) => (this.temperature = temperature))
        .catch((error) => (this.temperature = null));
    }
  }
}
