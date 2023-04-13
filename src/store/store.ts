import { configureStore } from "@reduxjs/toolkit";
import inputsReducer from "../reducer/inputsSlice";



export const store = configureStore({
  reducer: {
    inputs: inputsReducer,
  },
});

