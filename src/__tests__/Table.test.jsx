import React from "react";
import { test, expect } from "vitest";import { render } from "@testing-library/react";
import Table from "../Table";
import "@testing-library/jest-dom";
const sampleData = [
  {
    id: 1,
    title: "Test Title 1",
    description: "Test Description 1",
    status: "In Progress",
    auto: "true",
  },
  {
    id: 2,
    title: "Test Title 2",
    description: "Test Description 2",
    status: "Completed",
    auto: "false",
  },
];

test("Table should render and display the correct data", () => {
  const { getByText } = render(<Table data={sampleData} />);

  sampleData.forEach((dataItem) => {
    const title = getByText(dataItem.title);
    const description = getByText(dataItem.description);
    const status = getByText(dataItem.status);
    const auto = getByText(dataItem.auto);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(auto).toBeInTheDocument();
  });
});
