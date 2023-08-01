import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private APIKey = '9625a4ff18d8425db7092439230108 ';
  private APIURL = 'http://api.weatherapi.com/v1/current.json';

  constructor() {}
  getTemperature(cityName: string): Promise<number> {
    const url = `${this.APIURL}?key=${this.APIKey}&q=${cityName}`;
    return axios
      .get(url)
      .then((response) => response.data.current.temp_c)
      .catch((error) => {
        console.error(`Error Fetching Temperature ${error}`);
        return null;
      });
  }
}
