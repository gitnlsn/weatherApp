import React from "react";
import styled from "styled-components";

interface ErrorMessageProps {
    message: string;
}

const Error = styled.p`
    /* height: 56px; */
    width: fit-content;
    min-width: 300px;
    padding: 16px;
    justify-content: center;

    color: black;
    font-weight: bold;
    background-color: pink;
    border-left: 8px solid red;
`

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
    message
}) => {
    return <Error>{message}</Error>;
}