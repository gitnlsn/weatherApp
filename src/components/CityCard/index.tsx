import React, { useEffect, useState } from "react";
import { City } from '../../models/City';
import { fetchWikipediaImage } from "../../api/WikipediaImage";

import CityImg from '../../public/images/random-city.png';

import * as Styled from './styles';

interface CityCardProps {
    city: City | undefined;
}

export const CityCard: React.FC<CityCardProps> = ({
    city
}) => {
    const [thumbnail, setThumbnail] = useState('');
    
    useEffect(() => {
        if (!city) {
            return;
        }
        fetchWikipediaImage({ q: city.name })
            .then(url => setThumbnail(url))
            .catch(() => setThumbnail(''));
    }, [city]);
    
    if (city) {
        return (
            <Styled.CardContainer>
                {thumbnail.length > 0
                    ? (<img src={thumbnail} />)
                    : <img src={CityImg} />}
                <Styled.DataWrapper>
                    <p>City: <span>{city.name}</span></p>
                    <p>Country: <span>{city.country}</span></p>
                    <p>Latitude: <span>{city.latitude}</span></p>
                    <p>Longitude: <span>{city.longitude}</span></p>
                </Styled.DataWrapper>
            </Styled.CardContainer>
        )
    } else {
        return (
            <Styled.CardContainer>
                <img src={CityImg} />
                <Styled.DataWrapper>
                    <p>City: <span>-</span></p>
                    <p>Country: <span>-</span></p>
                    <p>Latitude: <span>-</span></p>
                    <p>Longitude: <span>-</span></p>
                </Styled.DataWrapper>
            </Styled.CardContainer>
        )
    }
}