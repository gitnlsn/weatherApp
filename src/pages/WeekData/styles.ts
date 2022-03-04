import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 16px 56px;
`;

export const Title = styled.h1``;

export const Subtitle = styled.h2`
    margin-top: 16px;
    margin-bottom: 8px;
`;

export const CityWrapper = styled.div`
    align-self: center;
    margin: 8px;
`;

export const InputSection = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
`;

export const InputWrapper = styled.div`
    margin-left: 8px;
    width: fit-content;
    min-width: 150px;

    margin-top: 8px;
`;

export const ResultsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 8px;
    overflow-x: auto;
`;

export const FetchStatusWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;

export const CardWrapper = styled.div`
    margin: 8px;
`;
