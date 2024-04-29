export interface Country {
  id: string;
  title: string;
}

export interface CountryData {
  id: string;
  status: string;
  timeseries: [string, number][]
}

export interface CountryState {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

export interface CountryDataState {
  country: CountryData;
  loading: boolean;
  error: string | null;
}

export interface MatchParams {
  params: {
      countryId:string;
  };
}
