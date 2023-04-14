import React from "react";
import { test, expect } from "vitest";import { render, screen, fireEvent } from "@testing-library/react";
import {DragZones} from "../components";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "@testing-library/jest-dom";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
const renderWithProvider = (component) => {
  return render(
    <Provider store={store}>
      <DndProvider backend={TouchBackend}>{component}</DndProvider>
    </Provider>
  );
};

test("DragZones should render correctly", () => {
  renderWithProvider(<DragZones />);
  const header1 = screen.getByText("Drag To Right");
  const header2 = screen.getByText("Click On Save");
  const saveButton = screen.getByText("Save");

  expect(header1).toBeInTheDocument();
  expect(header2).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();
});

test("DragZones handleSave should work correctly", async () => {
  renderWithProvider(<DragZones />);
  const saveButton = screen.getByText("Save");

  // Click the Save button
  fireEvent.click(saveButton);

  // Wait for the Table component to render
  await screen.findByText("ID");

  // Check if the table header is rendered
  expect(screen.getByText("ID")).toBeInTheDocument();
  expect(screen.getByText("TITLE")).toBeInTheDocument();
  expect(screen.getByText("DESCRIPTION")).toBeInTheDocument();
  expect(screen.getByText("STATUS")).toBeInTheDocument();
  expect(screen.getByText("AUTO POST")).toBeInTheDocument();
});
