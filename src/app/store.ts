import { configureStore } from "@reduxjs/toolkit";
import countryDataReducer from "../features/countryDataSlice";
import countryReducer from "../features/countrySlice";

export const store = configureStore({
  reducer: {
    countries: countryReducer,
    country: countryDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
