import styled from "styled-components";

export const CardContainer = styled.div`
    width: fit-content;
    min-width: 160px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border: 1px solid;
    box-shadow: 0px 0px 1px 1px #ccc;
`;

export const Description = styled.div`
    padding: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        margin: 8px;
        width: 64px;
        height: 64px;
    }
`;

export const Section = styled.div`
    padding: 8px;
`;
