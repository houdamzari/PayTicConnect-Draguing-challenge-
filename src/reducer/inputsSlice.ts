import { createSlice } from "@reduxjs/toolkit";
import { States } from "../interfaces";
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
    changeCheckbox: (state) => {
      state.checkbox = !state.checkbox;
    },
    changeDropdown: (state, action) => {
      console.log(action.payload);
      state.dropdown = action.payload;
    },
    addElementFirstZone: (state, action) => {
      state.firstZoneComponent = [
        ...state.firstZoneComponent,
        ...action.payload,
      ];
    },
    addElementSecondZone: (state, action) => {
      console.log(action.payload);
      state.secondZoneComponent = [
        ...state.secondZoneComponent,
        ...action.payload,
      ];
    },
    removeElementFirstZone: (state, action) => {
      state.firstZoneComponent = state.firstZoneComponent.filter(
        (zone: States.StoredComponentState) => zone.id !== action.payload
      );
    },
    removeElementSecondZone: (state, action) => {
      state.secondZoneComponent = state.secondZoneComponent.filter(
        (zone: States.StoredComponentState) => zone.id !== action.payload
      );
    },
    resetSecondZone: (state) => {
      state.secondZoneComponent = [];
    },
  },
});

export const {
  changeTitle,
  changeDescription,
  changeCheckbox,
  changeDropdown,
  addElementFirstZone,
  addElementSecondZone,
  removeElementFirstZone,
  removeElementSecondZone,
  resetSecondZone,
} = inputsSlice.actions;

export default inputsSlice.reducer;