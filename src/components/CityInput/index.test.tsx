import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { CityInput } from '.'

describe("CityInput", () => {
    it("should call onChange on user input", async () => {
        const onSubmit = jest.fn();
        const { debug } = render(
            <CityInput onSubmit={onSubmit} />
        );

        userEvent.type(screen.getByTestId('test-city-input'), 'são paulo');
        fireEvent.submit(screen.getByTestId('test-city-input'));
        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(onSubmit).toHaveBeenCalledWith('são paulo');
        })
    });
});