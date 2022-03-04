import axios, { AxiosRequestConfig } from "axios";

interface fetch5Day3HourDataProps {
    cityName: string
}

// https://rapidapi.com/community/api/open-weather-map/
export const fetch5Day3HourData = ({
    cityName
}: fetch5Day3HourDataProps) => {
    const options: AxiosRequestConfig<any> = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': 'b794f5d392msh986c364e40ab47fp10d8efjsn7720422550ce'
        },
    };
    
    return axios.request({
        ...options,
        params: { q: cityName }
    })
}

