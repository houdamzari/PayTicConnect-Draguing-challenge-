import { createSlice } from "@reduxjs/toolkit";

export interface InputsState {
  title: string;
  description: string;
}

const initialState: InputsState = {
  title: "",
  description: "",
};

export const inputsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    changeDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { changeTitle, changeDescription } = inputsSlice.actions;

export default inputsSlice.reducer;