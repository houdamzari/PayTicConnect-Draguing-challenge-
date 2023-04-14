import React from "react";
import { test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import DropDown from "../DropDown";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import "@testing-library/jest-dom";
test("DropDown should render and handle dropdown events", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <DndProvider backend={TouchBackend}>
        <DropDown />
      </DndProvider>
    </Provider>
  );
  const dropdownHeader = getByText(/Choose a status/i);

  expect(dropdownHeader).toBeInTheDocument();

  fireEvent.click(dropdownHeader);

  const allowCommentsOption = getByText(/Allow Comments/i);
  const disableCommentsOption = getByText(/Disable Comments/i);

  expect(allowCommentsOption).toBeInTheDocument();
  expect(disableCommentsOption).toBeInTheDocument();

  fireEvent.click(allowCommentsOption);

  const updatedDropdownHeader = getByText(/Allow Comments/i);

  expect(updatedDropdownHeader).toBeInTheDocument();

  fireEvent.click(updatedDropdownHeader);
  fireEvent.click(disableCommentsOption);

  const finalDropdownHeader = getByText(/Disable Comments/i);

  expect(finalDropdownHeader).toBeInTheDocument();
});
