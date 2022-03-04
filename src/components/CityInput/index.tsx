import React, { useState } from 'react';
import styled from 'styled-components';

interface CityInputProps {
    onSubmit: (name: string) => void
}

const Form = styled.form`
    width: 100%;
`;

const Input = styled.input`
    height: 32px;
    width: 100%;
    padding-left: 1rem;
`;

export const CityInput: React.FC<CityInputProps> = ({
    onSubmit
}) => {
    const [value, setValue] = useState('');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onSubmit(value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                data-testid="test-city-input"
                type='text'
                placeholder='Enter city name here'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input type='submit' hidden />
        </Form>
    );
}
