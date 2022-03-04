import { render, screen } from "@testing-library/react";
import React from "react";
import { Weather } from '../../models/Weather'
import { WeatherCard } from '.'
import { format } from "date-fns";

describe("WeatherCard", () => {
    const weather: Weather = {
        description: 'light rain',
        temperature: {
            max: 32.2,
            min: 22.2,
            feel: 20.0,
            mean: 27.2,
        },
        humidity: 77,
        pressure: 1015,
        rain_probability: 0.41,
        wind: {
            speed: 1.78,
            degrees: 111
        },
        date: new Date(2022, 0, 12, 13),
    }
    
    it("should display temperatures and rain probability", () => {
        const { debug } = render(
            <WeatherCard
                weather={weather}
            />
        );
        expect(screen.getByText(`${weather.temperature.feel}`)).toBeInTheDocument();
        expect(screen.getByText(`${weather.temperature.mean}`)).toBeInTheDocument();
        expect(screen.getByText(`${weather.temperature.min}`)).toBeInTheDocument();
        expect(screen.getByText(`${weather.temperature.max}`)).toBeInTheDocument();
        expect(screen.getByText(`${weather.rain_probability}`)).toBeInTheDocument();
    })

    it("should display date if requested", () => {
        const { debug } = render(
            <WeatherCard
                weather={weather}
            />
        );
        // expect(screen.getByText(`${format(weather.date, 'MM/dd/yyyy')}`)).toBeInTheDocument();
        expect(screen.getByText(`${format(weather.date, 'EEEE')}`)).toBeInTheDocument();
        expect(screen.getByText(`${format(weather.date, 'HH:mm')}`)).toBeInTheDocument();
    })
})