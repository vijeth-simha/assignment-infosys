import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { fetchCountryById } from "../features/countryDataSlice";
import { useParams } from "react-router-dom";
import TimeSeriesChart from "../components/TimeSeriesChart";

const CountryDataPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { countryId, name } = useParams<{ countryId: string; name: string }>();
  const { country, loading, error } = useSelector(
    (state: RootState) => state.country
  );
  const values = country.timeseries.map(([timestamp, value]) => value);

  // Find the highest and lowest values using Math.max and Math.min
  const highestValue = Math.max(...values);
  const lowestValue = Math.min(...values);

  React.useEffect(() => {
    if (countryId) {
      dispatch(fetchCountryById(countryId));
    }
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="country-data-container">
      <p>
        The status is{" "}
        <span style={{ fontWeight: "bold" }}>{country.status}</span> for the
        country <span style={{ fontWeight: "bold" }}>{name}</span>
      </p>
      <p>
        Highest value is{" "}
        <span style={{ fontWeight: "bold" }}>{highestValue}</span> Lowest Value
        is <span style={{ fontWeight: "bold" }}>{lowestValue}</span>
      </p>
      {country.status !== "" && <TimeSeriesChart data={country.timeseries} />}
    </div>
  );
};

export default CountryDataPage;
