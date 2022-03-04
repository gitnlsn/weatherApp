import { parseDate, Weather } from '.';
import { WeatherRequest } from '../../api/OpenWeatherApp/WeatherRequest';

describe("parseDate", () => {
    it("should pass basic test", () => {
        const parsed = parseDate("2022-02-25 21:00:00");
        const expected = new Date(2022, 1, 25, 21, 0);
        expect(parsed.getTime()).toBe(expected.getTime());
    })
})

describe("Weather constructor", () => {
    it("should pass basic test", () => {
        const mockedData: WeatherRequest = {
            "dt": 1645822800,
            "main": {
                "temp": 299.66,
                "feels_like": 299.66,
                "temp_min": 299.66,
                "temp_max": 299.66,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 930,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 77
            },
            "wind": {
                "speed": 3.55,
                "deg": 130,
                "gust": 4.28
            },
            "visibility": 10000,
            "pop": 0.53,
            "rain": {
                "3h": 0.99
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-02-25 21:00:00"
        };
        const weather = new Weather(mockedData);
        const expected: Weather = {
            description: 'light rain',
            date: new Date(2022, 1, 25, 21, 0),
            humidity: 69,
            pressure: 1014,
            rain_probability: 0.99,
            temperature : {
                feel: 26.51,
                mean: 26.51,
                max: 26.51,
                min: 26.51,
            },
            wind: {
                speed: 3.55,
                degrees: 130,
            }
        }
        expect(weather).toEqual(expected);
    });
});