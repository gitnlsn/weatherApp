import { CityRequest } from '../../api/OpenWeatherApp/CityRequest'

export class City {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    country: string;

    constructor(CityRequest: CityRequest) {
        this.id = CityRequest.id;
        this.name = CityRequest.name;
        this.country = CityRequest.country;
        this.latitude = CityRequest.coord.lat;
        this.longitude = CityRequest.coord.lon;
    }
}