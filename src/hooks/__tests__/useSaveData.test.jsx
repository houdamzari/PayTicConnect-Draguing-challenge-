import { renderHook, act } from "@testing-library/react-hooks";
import useSaveData from "../useSaveData";

describe("useSaveData", () => {
  it("should save data correctly", () => {
    const secondZoneComponent = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    const inputs = {
      title: "Sample Title",
      description: "Sample Description",
      dropdown: "Sample Status",
      checkbox: true,
    };

    const { result } = renderHook(() =>
      useSaveData(secondZoneComponent, inputs)
    );

    expect(result.current.data).toEqual([]);

    act(() => {
      result.current.handleSave();
    });

    const expectedData = [
      {
        id: 1,
        title: "Sample Title",
        description: "Sample Description",
        status: "Sample Status",
        auto: "true",
      },
    ];

    expect(result.current.data).toEqual(expectedData);
  });
});
