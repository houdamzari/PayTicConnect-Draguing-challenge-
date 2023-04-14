import React from "react";
import { test ,vi} from "vitest";
import { render, fireEvent } from "@testing-library/react";
import {Button} from "../components";
import "@testing-library/jest-dom";
test("Button should render and handle click event", () => {
  const handleSave = vi.fn();
  const { getByText } = render(<Button handleSave={handleSave} />);

  const buttonElement = getByText("Save");
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(handleSave).toHaveBeenCalledTimes(1);
});
