import styled from "styled-components";

export const CardContainer = styled.div`
    height: 200px;
    min-width: 400px;
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 8px;
    border: 1px solid;
    box-shadow: 0px 0px 1px 1px #aaa;

    img {
        height: 100%;
        border: 2px solid;
        margin-right: 8px;
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