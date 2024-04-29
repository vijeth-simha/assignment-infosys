import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from './app/store'
import { Provider } from 'react-redux'


// Render your React component instead
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
