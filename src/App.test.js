import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("todo", () => {
  render(<App />);
  const form = screen.getByTestId("form");
  expect(screen.queryByTestId("item-todo")).toBeNull();
  fireEvent.submit(form);
  expect(screen.queryByTestId("item-todo")).toBeInTheDocument();
});
