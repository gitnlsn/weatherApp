import styled from "styled-components";

export const CardContainer = styled.div`
    height: 200px;
    min-width: 400px;
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 8px;
    box-shadow: 0px 0px 1px 1px #000;
    background-color: #90E0EF;

    img {
        height: 100%;
        border: 2px solid;
        margin-right: 8px;
        background-color: white;
    }
`;

export const DataWrapper = styled.div`
    height: 100%;

    p {
        span {
            font-weight: bold;
        }
    }
`;