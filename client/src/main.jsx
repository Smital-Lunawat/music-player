import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes.jsx";
import "./styles.scss";

import { Provider } from "react-redux";
import { store } from "./store";
<<<<<<< HEAD
import Maintenance from './pages/Maintenance.jsx';

const isMaintenance = import.meta.env.VITE_MAINTENANCE
=======
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    {isMaintenance ? <Maintenance /> :
    <Provider store={store}>
      <AppRoutes />
    </Provider>}
  </React.StrictMode>,
);
=======
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
);
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49
