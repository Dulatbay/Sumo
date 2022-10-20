import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import store from "./redux/index";
import Routes from "./Routes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
       <Routes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
