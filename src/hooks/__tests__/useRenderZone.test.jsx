import { render, screen } from "@testing-library/react";
import useRenderZone from "../useRenderZone";
import { describe, expect, it , afterEach} from "vitest";
import React, { useEffect } from "react";
import '@testing-library/jest-dom'
import PropTypes from "prop-types";



const TestComponent = ({ components, zoneComponents }) => {


  const renderedComponents = useRenderZone(components, zoneComponents);

  useEffect(() => {
    renderedComponents.forEach((component, index) => {
      if (component) {
        const container = document.createElement("div");
        container.setAttribute("data-testid", `component-${index}`);
        document.body.appendChild(container);
        render(component, { container });
      }
    });
  }, [renderedComponents]);

  return null;
};

TestComponent.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      el: PropTypes.node.isRequired,
    })
  ).isRequired,
  zoneComponents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

describe("useRenderZone", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should render only components that match the zoneComponents", () => {
    const components = [
      { id: 1, el: <div data-testid='1'>component 1</div> },
      { id: 2, el: <div data-testid='2'>component 2</div> },
      { id: 3, el: <div data-testid='3'>component 3</div> },
    ];

    const zoneComponents = [{ id: 1 }, { id: 3 }];

    render(<TestComponent components={components} zoneComponents={zoneComponents} />);

    expect(screen.getByTestId("1")).toBeInTheDocument();

  });

  it("should return an empty list if no components match the zoneComponents", () => {
    const components = [
      { id: 1, el: <div>component 1</div> },
      { id: 2, el: <div>component 2</div> },
      { id: 3, el: <div>component 3</div> },
    ];

    const zoneComponents = [{ id: 4 }, { id: 5 }];

    render(<TestComponent components={components} zoneComponents={zoneComponents} />);

    expect(screen.queryByText("component 1")).not.toBeInTheDocument();
    expect(screen.queryByText("component 2")).not.toBeInTheDocument();
    expect(screen.queryByText("component 3")).not.toBeInTheDocument();
  });
});
