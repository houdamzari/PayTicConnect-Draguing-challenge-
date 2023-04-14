import { configureStore } from "@reduxjs/toolkit";
import inputsReducer from "../reducer/inputsSlice";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storageSession,
};
const persistedReducer = persistReducer(persistConfig, inputsReducer);
export const store = configureStore({
  reducer: {
    inputs: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
