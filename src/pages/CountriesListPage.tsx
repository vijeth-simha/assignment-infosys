import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { Country } from "../types";
import CountryComponent from "../components/Country";
import { fetchCountries } from "../features/countrySlice";

const CountriesListPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { countries, loading, error } = useSelector(
    (state: RootState) => state.countries
  );

  React.useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(countries);

  return (
    <React.Fragment>
      <p className="countries-heading">Countries </p>
      <div className="country-container">
        {countries.map((country: Country) => (
          <React.Fragment key={country.id}>
            <CountryComponent country={country} />
          </React.Fragment>
        ))}
      </div>
      <span style={{fontSize:"8px",fontWeight:'lighter',paddingLeft:"2rem"}}>* click on the country to know more</span>
    </React.Fragment>
  );
};

export default CountriesListPage;
