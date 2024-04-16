import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes.jsx";
import "./styles.scss";

import { Provider } from "react-redux";
import { store } from "./store";
import Maintenance from './pages/Maintenance.jsx';

const isMaintenance = import.meta.env.VITE_MAINTENANCE

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {isMaintenance ? <Maintenance /> :
    <Provider store={store}>
      <AppRoutes />
    </Provider>}
  </React.StrictMode>,
);