import React from "react";
import { test, expect } from "vitest";import { render, fireEvent } from "@testing-library/react";
import TextInput from "../TextInput";
import "@testing-library/jest-dom";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { Provider } from "react-redux";
import { store } from "../../store/store";
test("TextInput should render and handle change event", async () => {
  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <DndProvider backend={TouchBackend}>
        <TextInput />
      </DndProvider>
    </Provider>
  );
  const input = getByPlaceholderText("Choose a name...");

  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "New title" } });

  expect(input).toHaveValue("New title");
});
