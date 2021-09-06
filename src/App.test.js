import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("render required elements and functions", () => {
  render(<App />);

  //test webpage display of book search input, button
  expect(screen.getByText("Welcome to Book Search")).toBeInTheDocument();
  expect(screen.getByTestId("book-title-search-input")).toBeInTheDocument();
  expect(screen.getByTestId("book-title-search-btn")).toBeInTheDocument();

  //test book search button onClick callback function
  const mockFn = jest.fn();
  screen.getByTestId("book-title-search-btn").onclick = mockFn;
  fireEvent.change(screen.getByTestId("book-title-search-input"), {
    target: { value: "Test Title" },
  });
  fireEvent.click(screen.getByTestId("book-title-search-btn"));
  expect(mockFn.mock.calls.length).toBe(1);
});
