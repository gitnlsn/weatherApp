import React, { useEffect, useState } from "react";
import { fetch5Day3HourData } from '../../api/OpenWeatherApp';
import { CityRequest } from '../../api/OpenWeatherApp/CityRequest';
import { WeatherRequest } from '../../api/OpenWeatherApp/WeatherRequest';

import { Weather } from '../../models/Weather';
import { City } from '../../models/City';

import Spinner from 'react-spinners/PulseLoader';
import { CityInput } from '../../components/CityInput';
import { CityCard } from '../../components/CityCard';
import { WeatherCard } from '../../components/WeatherCard';
import { ErrorMessage } from "../../components/ErrorMessage";

import * as Styled from './styles';
import { groupByDate, getDates } from "../../utils/groupWeatherData";
import { DaySelector } from "../../components/DaySelector";

type PageState = {
    fetchState: 'idle' | 'loading' | 'rejected' | 'resolved';
    errorMessage: string;
    weatherData: { [x: string]: Weather[] };
    cityData: City | undefined;
    selectedDate: string;
}

export const WeekWeatherPage: React.FC = () => {

    const [cityName, setCityName] = useState("");
    const [state, setState] = useState<PageState>({
        fetchState: 'idle',
        weatherData: {},
        cityData: undefined,
        errorMessage: '',
        selectedDate: ''
    });

    useEffect(() => {
        if (cityName.length === 0) {
            setState({
                fetchState: 'idle',
                errorMessage: '',
                cityData: state.cityData,
                weatherData: state.weatherData,
                selectedDate: ''
            });
            return
        }

        setState({
            fetchState: 'loading',
            errorMessage: '',
            cityData: undefined,
            weatherData: {},
            selectedDate: ''
        });

        fetch5Day3HourData({ cityName })
            .then(response => response.data)
            .then(data => {
                const cityRequest = data.city as CityRequest;
                const weatherRequestList = data.list as WeatherRequest[];
                const weatherDataList = weatherRequestList.map(data => new Weather(data))
                const groupedWeatherDataList = groupByDate(weatherDataList);
                const dateList = getDates(weatherDataList);
                setState({
                    fetchState: 'resolved',
                    errorMessage: '',
                    cityData: new City(cityRequest),
                    weatherData: groupedWeatherDataList,
                    selectedDate: dateList[0],
                });
            }).catch(error => {
                console.log(error);
                if (error.message === 'Request failed with status code 404') {
                    setState({
                        fetchState: 'rejected',
                        errorMessage: 'City not found',
                        cityData: undefined,
                        weatherData: {},
                        selectedDate: ''
                    })
                } else {
                    setState({
                        fetchState: 'rejected',
                        errorMessage: error.message,
                        cityData: undefined,
                        weatherData: {},
                        selectedDate: ''
                    });
                }
            });
    }, [cityName]);

    const weatherData = state.weatherData[state.selectedDate];
    const dates = Object.keys(state.weatherData).map(dateString => ({
        key: dateString,
        value: dateString,
    }));

    const displayWeatherData = (
        state.fetchState === 'resolved'
        || state.fetchState === 'idle'
    ) && !!weatherData;

    return (
        <Styled.Container>
            <Styled.Title>Weather App</Styled.Title>
            <Styled.Subtitle>Enter city name to get the weather</Styled.Subtitle>

            <Styled.CityWrapper>
                <CityCard city={state.cityData} />
            </Styled.CityWrapper>

            <Styled.InputSection>
                <Styled.InputWrapper>
                    <CityInput onSubmit={(inputCityName) => setCityName(inputCityName)} />
                </Styled.InputWrapper>

                <Styled.InputWrapper>
                    <DaySelector
                        value={state.selectedDate}
                        onChange={(dateString) => setState({
                            fetchState: 'resolved',
                            errorMessage: '',
                            cityData: state.cityData,
                            selectedDate: dateString,
                            weatherData: state.weatherData
                        })}
                        data={dates}
                    />
                </Styled.InputWrapper>
            </Styled.InputSection>

            <Styled.FetchStatusWrapper>
                {state.fetchState === 'loading' && <Spinner />}
                {state.fetchState === 'rejected' && <ErrorMessage message={state.errorMessage} />}
            </Styled.FetchStatusWrapper>
            
            <Styled.ResultsWrapper>
                {displayWeatherData && weatherData.map((weather, index) => (
                    <Styled.CardWrapper key={index}>
                        <WeatherCard weather={weather} />
                    </Styled.CardWrapper>
                ))}
            </Styled.ResultsWrapper>
        </Styled.Container>
    );
}
