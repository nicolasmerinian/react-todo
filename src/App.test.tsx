import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

// To test
import App from "./App";
/*
describe("App", () => {
    describe("Button", () => {
        it("should increment the counter", async () => {
            // setup
            render(<App />);
            // then
            expect(await screen.findByText(/count is 0/i)).toBeInTheDocument();
            // when
            userEvent.click(screen.getByRole("button"));
            // then
            expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
        });
    });
});*/