import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CountryData, CountryDataState } from "../types";

const initialState: CountryDataState = {
  country: {
    id: "1",
    status: "",
    timeseries: [],
  },
  loading: false,
  error: null,
};

export const fetchCountryById = createAsyncThunk<CountryData, string>(
  "countries/fetchCountryById",
  async (id: string) => {
    const response = await axios.get<CountryData>(
      `http://localhost:3000/country-data/${id}`
    );
    return response.data;
  }
);

const countryDataSlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCountryById.fulfilled,
        (state, action: PayloadAction<CountryData>) => {
          state.loading = false;
          state.country = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type === fetchCountryById.rejected.type,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload ?? "An error occurred.";
        }
      );
  },
});

export default countryDataSlice.reducer;
