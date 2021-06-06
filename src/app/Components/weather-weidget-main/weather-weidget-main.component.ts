import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-weidget-main',
  templateUrl: './weather-weidget-main.component.html',
  styleUrls: ['./weather-weidget-main.component.css']
})
export class WeatherWeidgetMainComponent implements OnInit {
  WeatherData: any;
  constructor() { }

  ngOnInit(): void {
    this.WeatherData = {
      main: {},
      isDay: true
    }
    this.getWeatherData();
    console.log(this.WeatherData);

  }
  getWeatherData() {
    let city = 'bangalore'
    let apikey = '679990829fd40aa0c3f37c86ebecef21';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        this.setWeatherData(data)
        console.log(data);

      })


    /*   let data = JSON.parse(`{
   "coord": {
     "lon": -122.08,
     "lat": 37.39
   },
   "weather": [
     {
       "id": 800,
       "main": "Clear",
       "description": "clear sky",
       "icon": "01d"
     }
   ],
   "base": "stations",
   "main": {
     "temp": 282.55,
     "feels_like": 281.86,
     "temp_min": 280.37,
     "temp_max": 284.26,
     "pressure": 1023,
     "humidity": 100
   },
   "visibility": 16093,
   "wind": {
     "speed": 1.5,
     "deg": 350
   },
   "clouds": {
     "all": 1
   },
   "dt": 1560350645,
   "sys": {
     "type": 1,
     "id": 5122,
     "message": 0.0139,
     "country": "US",
     "sunrise": 1560343627,
     "sunset": 1560396563
   },
   "timezone": -25200,
   "id": 420006353,
   "name": "Mountain View",
   "cod": 200
   }
 `)
    this.setWeatherData(data);*/
  }
  setWeatherData(data) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());

    this.WeatherData.temp_celcius = (this.WeatherData.main.temp).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like).toFixed(0);
  }
}
