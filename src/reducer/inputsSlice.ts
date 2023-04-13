import { createSlice } from "@reduxjs/toolkit";
import { States } from "../../interfaces";
const initialState: States.AppState["inputs"] = {
  title: "",
  description: "",
  firstZoneComponent: [{ id: 1 }, { id: 2 }],
  secondZoneComponent: [],
  checkbox: false,
  dropdown: "",
};

export const inputsSlice = createSlice({
  name: "inputs",
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

export const {
  changeTitle,
  changeDescription,
} = inputsSlice.actions;

export default inputsSlice.reducer;
