import React from "react";

import { Weather } from '../../models/Weather';

import ClearSkyIcon from '../../public/images/meteo-clear-sky.png';
import FewCloudsIcon from '../../public/images/meteo-few-clouds.png';
import OvercastCloudsIcon from '../../public/images/meteo-overcast-clouds.png';
import BrokenCloudsIcon from '../../public/images/meteo-broken-clouds.png';
import LightRainIcon from '../../public/images/meteo-light-rain.png';
import ModerateRainIcon from '../../public/images/meteo-moderate-rain.png';
import HeavyRainIcon from '../../public/images/meteo-heavy-rain.png';
import LightSnowIcon from '../../public/images/meteo-light-snow.png';
import WeatherNewsIcon from '../../public/images/meteo-weather-news.png';
import SnowIcon from '../../public/images/meteo-snow.png';

import * as Styled from './styles';

interface WeatherCardProps {
    weather: Weather
}

const formatDatetime = (date: Date): string => {
    const hour = date.getHours();
    return `${hour}:00`;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
    const imagesMap = (description: string) => {
        return {
            'clear sky': ClearSkyIcon,
            'few clouds': FewCloudsIcon,
            'overcast clouds': OvercastCloudsIcon,
            'broken clouds': BrokenCloudsIcon,
            'scattered clouds': BrokenCloudsIcon,
            'light rain': LightRainIcon,
            'moderate rain': ModerateRainIcon,
            'heavy intensity rain': HeavyRainIcon,
            'light snow': LightSnowIcon,
            'snow': SnowIcon,
        }[description] || WeatherNewsIcon;
    };

    const WeatherIcon = imagesMap(weather.description);

    return (
        <Styled.CardContainer>
            <Styled.Description>
                <img src={WeatherIcon} alt='weather-icon' />
                <p>{weather.description}</p>
            </Styled.Description>
            <Styled.Section>
                <p>Max: <span>{weather.temperature.max}°C</span></p>
                <p>Min: <span>{weather.temperature.min}°C</span></p>
                <p>Humidity: <span>{weather.humidity}%</span></p>
            </Styled.Section>
            <Styled.Section>
                <p>{formatDatetime(weather.date)}</p>
            </Styled.Section>
        </Styled.CardContainer>
    )
}
