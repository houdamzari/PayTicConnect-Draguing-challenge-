import { renderHook } from "@testing-library/react-hooks";
import useRenderZone from "../useRenderZone";

describe("useRenderZone", () => {
  it("should render only components that match the zoneComponents", () => {
    const components = [
      { id: 1, el: "component 1" },
      { id: 2, el: "component 2" },
      { id: 3, el: "component 3" },
    ];

    const zoneComponents = [{ id: 1 }, { id: 3 }];

    const { result } = renderHook(() =>
      useRenderZone(components, zoneComponents)
    );

    const expectedList = ["component 1", null, "component 3"];

    expect(result.current).toEqual(expectedList);
  });

  it("should return an empty list if no components match the zoneComponents", () => {
    const components = [
      { id: 1, el: "component 1" },
      { id: 2, el: "component 2" },
      { id: 3, el: "component 3" },
    ];

    const zoneComponents = [{ id: 4 }, { id: 5 }];

    const { result } = renderHook(() =>
      useRenderZone(components, zoneComponents)
    );

    const expectedList = [null, null, null];

    expect(result.current).toEqual(expectedList);
  });
});
