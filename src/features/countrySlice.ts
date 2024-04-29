import {  createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Country, CountryState } from "../types";

const initialState: CountryState = {
  countries: [],
  loading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk<Country[]>(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get<Country[]>("http://localhost:3000/country-list");
    return response.data;
  }
);

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCountries.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<Country[]>) => {
          state.loading = false;
          state.countries = action.payload;
        })
        .addMatcher(
            (action) => action.type === fetchCountries.rejected.type,
            (state, action: PayloadAction<string | undefined>) => {
              state.loading = false;
              state.error = action.payload ?? 'An error occurred.';
            }
          );
    },
  });
  
  
  export default countrySlice.reducer;