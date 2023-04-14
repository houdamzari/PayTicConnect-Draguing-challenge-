import React, { useRef } from "react";
import { act } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { render } from "@testing-library/react";
import useOutsideClick from "../useOutsideClick";

const WrapperComponent = ({ callback }) => {
  const ref = useRef(null);
  useOutsideClick(ref, callback);
  return <div ref={ref}></div>;
};
describe("useOutsideClick", () => {
  it("should call the callback function when clicking outside the element", async () => {
    const callback = vi.fn();
    render(<WrapperComponent callback={callback} />);

    await act(async () => {
      userEvent.click(document.body);
    });

    expect(callback).toHaveBeenCalledTimes(0);
  });
  it("should not call the callback function when clicking inside the element", async () => {
    const callback = vi.fn();
    const { container } = render(<WrapperComponent callback={callback} />);

    await act(async () => {
      userEvent.click(container.firstChild);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
