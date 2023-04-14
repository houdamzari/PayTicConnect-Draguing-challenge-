import React from "react";
import { test, expect } from "vitest";import { render } from "@testing-library/react";
import {DropZone} from "../components";
import "@testing-library/jest-dom";
test("DropZone should render correctly", () => {
  const headerText = "Test Header";
  const { getByText } = render(
    <DropZone headerText={headerText} isOver={false}>
      <div>Test Content</div>
    </DropZone>
  );

  const headerElement = getByText(headerText);
  const contentElement = getByText("Test Content");

  expect(headerElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});
