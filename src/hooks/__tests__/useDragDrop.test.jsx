import { renderHook } from "@testing-library/react-hooks";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "../../reducer/inputsSlice"; // Import your rootReducer here
import useDragDrop from "../useDragDrop";

describe("useDragDrop", () => {
  it("should handle drag and drop events", () => {
    // Create a Redux store using your rootReducer
    const store = configureStore({ reducer: rootReducer });

    // Wrap the renderHook function with the Redux Provider
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    renderHook(() => useDragDrop(), { wrapper });
  });
});
