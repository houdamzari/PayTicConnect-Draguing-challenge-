import React, { useRef } from "react";
import PropTypes from "prop-types";
import { vi , describe , expect , it } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import useOutsideClick from "../useOutsideClick";
import '@testing-library/jest-dom'
const WrapperComponent = ({ callback }) => {
  const ref = useRef(null);
  useOutsideClick(ref, callback);
  return <div data-testid='ref'><div ref={ref} ><div  >hello</div></div></div>;
};

WrapperComponent.propTypes = {
  callback: PropTypes.func.isRequired,
};

describe("useOutsideClick", () => {
  it("should call the callback function when clicking outside the element", async () => {
    const callback = vi.fn();
      render(<WrapperComponent callback={callback} />);
      const testContainer = document.body
       fireEvent.click(testContainer)

    expect(callback).toHaveBeenCalledTimes(0);
  });

  it("should call the callback function when clicking inside the element", async () => {
    const callback = vi.fn();
    const { container } = render(<WrapperComponent callback={callback} />);

    fireEvent.click(container)

    expect(callback).toHaveBeenCalledTimes(0);
  });
});
