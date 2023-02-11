import { render } from "@testing-library/react";
import App from "./App";

// TODO: write meaningful tests for the calculator functions and components

describe("Calculator", () => {
  it("renders the buttons", () => {
    render(<App />);
    const buttons = document.querySelectorAll("button");
    expect(buttons.length).toEqual(19);
  });
});
