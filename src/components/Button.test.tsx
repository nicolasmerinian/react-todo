import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

// To test
import Button from "./Button";

describe("Button component", () => {
    it("should contain the right text", async () => {
        // setup
        render(<Button>The right text</Button>);
        
        // then
        expect(await screen.findByText(/The right text/i)).toBeInTheDocument();
    });
    
    it("should call the onClick function", () => {
        // given
        const handleClick = vi.fn();
        render(<Button onClick={ handleClick }>My button</Button>);
        const btn = screen.getByText(/My button/i);

        // then
        expect(handleClick).toHaveBeenCalledTimes(0);
        
        // when
        fireEvent.click(btn);
        
        // then
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});