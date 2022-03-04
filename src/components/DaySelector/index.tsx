import React from "react";
import styled from "styled-components";

type Data = {
    key: string,
    value: string,
}

interface DaySelectorProps {
    data: Data[],
    value: string;
    onChange: (value: string) => void
}

const Select = styled.select`
    height: 32px;
    width: 100%;
    padding: 0px 1rem;

    :hover, :active{
        border-color: red;
    }
`;

export const DaySelector: React.FC<DaySelectorProps> = ({
    data,
    value,
    onChange
}) => {
    return (
        <Select 
            onChange={(e) => onChange(e.target.value)} 
            placeholder="Select a Day"
            value={value}
        >
            {data.map((d) => (
                <option key={d.key} value={d.value}>{d.key}</option>
            ))}
        </Select>
    );
};
