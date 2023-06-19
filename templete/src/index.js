import React from "react";
import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";

import "./assets/scss/style.scss";
import App from "./App";

// pages for this product
// import Components from "./views/components/components.jsx";
// import CustomComponents from "./views/custom-components/custom-components.jsx";
import { BrowserRouter } from "react-router-dom";

// var hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
