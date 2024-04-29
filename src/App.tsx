import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountriesListPage from "./pages/CountriesListPage";
import CountryDataPage from "./pages/CountryDataPage";
import {
  LinearScale,
  TimeScale,
  CategoryScale,
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  TimeScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CountriesListPage />,
  },
  {
    path: "/country-data/:countryId/:name",
    element: <CountryDataPage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
