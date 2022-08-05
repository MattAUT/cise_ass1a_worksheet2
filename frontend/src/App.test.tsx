import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders button", () => {
  render(<App />);
  const element = screen.getByText(/Increment count/i);
  expect(element).toBeInTheDocument();
});

describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(5);
  });
});
