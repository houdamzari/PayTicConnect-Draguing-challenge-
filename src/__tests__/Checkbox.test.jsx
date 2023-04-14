import React from "react";
import { test , expect } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import inputsSlice from "../../reducer/inputsSlice";
import { TouchBackend } from "react-dnd-touch-backend";
import Checkbox from "../Checkbox";
import "@testing-library/jest-dom";
import { DndProvider } from "react-dnd";
test("Checkbox should render and handle change event", async () => {
  const store = configureStore({ reducer: { inputs: inputsSlice } });

  const { getByRole } = render(
    <Provider store={store}>
      <DndProvider backend={TouchBackend}>
        <Checkbox />
      </DndProvider>
    </Provider>
  );

  const checkboxElement = getByRole("checkbox");
  expect(checkboxElement).toBeInTheDocument();

  fireEvent.click(checkboxElement);
  await waitFor(() => expect(store.getState().inputs.checkbox).toBe(false));

  fireEvent.click(checkboxElement);
  await waitFor(() => expect(store.getState().inputs.checkbox).toBe(false));
});
