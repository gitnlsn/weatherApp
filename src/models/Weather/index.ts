import { WeatherRequest } from '../../api/OpenWeatherApp/WeatherRequest'

export class Weather {
    description: string
    temperature: {
        min: number
        max: number
        mean: number
        feel: number
    }
    wind: {
        speed: number
        degrees: number
    }
    pressure: number
    humidity: number
    rain_probability?: number
    date: Date

    constructor(weatherRequest: WeatherRequest) {
        this.description = weatherRequest.weather[0].description;
        this.temperature = {
            feel: Math.round((weatherRequest.main.feels_like - 273.15) * 100) / 100,
            mean: Math.round((weatherRequest.main.temp - 273.15) * 100) / 100,
            min: Math.round((weatherRequest.main.temp_min - 273.15) * 100) / 100,
            max: Math.round((weatherRequest.main.temp_max - 273.15) * 100) / 100,
        };
        this.wind = {
            speed: weatherRequest.wind.speed,
            degrees: weatherRequest.wind.deg,
        };
        this.pressure = weatherRequest.main.pressure;
        this.humidity = weatherRequest.main.humidity;
        this.date = parseDate(weatherRequest.dt_txt);
        if (weatherRequest.rain) {
            this.rain_probability = weatherRequest.rain['3h'];
        }
    }
}

// "2022-02-25 21:00:00"
export const parseDate = (dateString: string): Date => {
    const datePart = dateString.split(' ')[0];
    const year = Number(datePart.split('-')[0]);
    const month = Number(datePart.split('-')[1]);
    const day = Number(datePart.split('-')[2]);

    const timePart = dateString.split(' ')[1];
    const hour = Number(timePart.split(':')[0]);
    const minute = Number(timePart.split(':')[1]);

    return new Date(year, month - 1, day, hour, minute);
}